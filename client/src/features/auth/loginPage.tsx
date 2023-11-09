import {
  Typography,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { routes } from '../../helpers/routes';
import { FormEventHandler } from 'react';
import { useMutation } from '@tanstack/react-query';
import { User } from '../../models/api';
import { queryClient } from '../..';
import { loginUser } from '../users/userActions';

export const LoginForm = () => {
  const { register } = useForm();
  const navigate = useNavigate();
  const { mutate: login } = useMutation<
    Partial<User>,
    unknown,
    Partial<User>,
    unknown
  >((data) => loginUser(data), {
    onSuccess: () => queryClient.invalidateQueries(['user']),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      enqueueSnackbar(error.response.data.details, { variant: 'error' });
    },
  });
  const handleSignIn: FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault();
    const formData = new FormData(form.currentTarget);
    const userData = Object.fromEntries(formData);
    login(userData);
  };

  return (
    <Box sx={{ m: '0 auto', width: '50%' }}>
      <Typography component="h1" variant="h5"  sx={{ mb: 2, mt: 10 }}>
        Bonjour
      </Typography>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      />
      <form name="login-form" onSubmit={handleSignIn}>
        <TextField
          color="secondary"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          autoComplete="email"
          autoFocus
          {...register('email')}
        />
        <TextField
          color="secondary"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Mot de passe"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register('password')}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => navigate(routes.ME)}
        >
          Se connecter
        </Button>
        <Box display="flex" justifyContent="space-evenly" sx={{ mt: 1 }}>
          <Link href="#" variant="body2" color="secondary">
            Mot de passe oublié ?
          </Link>
          <Link
            onClick={() => navigate(routes.REGISTER)}
            variant="body2"
            color="secondary"
            sx={{ cursor: 'pointer' }}
          >
            Je suis nouveau ici. S'inscrire
          </Link>
        </Box>
      </form>
    </Box>
  );
};
