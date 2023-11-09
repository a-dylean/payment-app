import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Slider,
  styled,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';
import { backgroundColor } from './theme';
import { FilterProps } from '../app/interfaces';
import { debounceTime } from '../appconfig';
import { Price } from './price';
import { Product } from '../models/api';
import { getMax, getMin } from '../helpers/helperFunctions';
import { useQuery } from '@tanstack/react-query';
import { api } from '../helpers/axios';

const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginBottom: theme.spacing(0.5),
  position: 'sticky',
  top: theme.spacing(6),
  backgroundColor: backgroundColor,
  padding: theme.spacing(2),
  zIndex: 5,
  gap: theme.spacing(3),
}));

export const Filter: React.FC<FilterProps> = ({
  choosePriceRange,
  chooseSortMethod,
  search,
}) => {
  const { data: products } = useQuery({
    queryFn: () => api.get('products').then((res) => res.data as Product[]),
  });
  console.log(products);
  const minPrice = getMin(products);
  const maxPrice = getMax(products);
  console.log(maxPrice);
  const handleSortChange = (event: SelectChangeEvent) => {
    chooseSortMethod(event.target.value as string);
  };
  const [value, setValue] = useState<number[]>([0, 0]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const valuetext = (value: number[]) => {
    if (value[0] === 0 && value[1] === 0) {
      return 'Prix';
    }
    return (
      <>
        <Price price={value[0]} /> -&nbsp;
        <Price price={value[1]} />
      </>
    );
  };

  const debouncedPriceSearch = useRef(
    debounce((value) => {
      choosePriceRange(value);
    }, debounceTime),
  ).current;

  const debouncedTermSearch = useRef(
    debounce((value) => {
      search(value);
    }, debounceTime),
  ).current;

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    setValue(newValue as number[]);
    debouncedPriceSearch(value.toString());
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    debouncedTermSearch(newSearchTerm);
  };

  const clearSearch = () => search(undefined);

  const clearSearchTermHandler = () => {
    setSearchTerm('');
    clearSearch();
  };

  return (
    <>
      <FilterBox>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="select-sort-label">Trier</InputLabel>
          <Select
            labelId="select-sort-label"
            id="select-sort-label"
            label="Sort"
            onChange={handleSortChange}
            sx={{ width: '100%' }}
          >
            <MenuItem value={'desc'}>Prix décroissant</MenuItem>
            <MenuItem value={'asc'}>Prix croissant</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <Select
            labelId="select-price-range-label"
            id="select-price-range-label"
            sx={{ width: 'auto' }}
            value={value}
            renderValue={() => valuetext(value)}
          >
            <Box
              sx={{
                width: '10rem',
                m: 'auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Slider
                size="small"
                getAriaLabel={() => {
                  return 'Prix';
                }}
                value={value}
                onChange={handlePriceRangeChange}
                step={10}
                min={minPrice}
                max={maxPrice}
              />
            </Box>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel>Rechercher</InputLabel>
          <OutlinedInput
            id="search-field"
            value={searchTerm}
            onChange={handleSearchChange}
            endAdornment={
              searchTerm.length > 0 && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear-search-term"
                    onClick={clearSearchTermHandler}
                    edge="end"
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </InputAdornment>
              )
            }
            label="Rechercher"
          />
        </FormControl>
      </FilterBox>
    </>
  );
};
