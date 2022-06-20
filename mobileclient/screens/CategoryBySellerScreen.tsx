import React,{useEffect} from 'react';
import { Box } from 'native-base';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import {useDispatch,useSelector} from 'react-redux'
import { fetchCategoryById } from '../redux/actions/categoryActions';
import Searchbar from '../components/Home/Searchbar';
import CategoryBySellerList from '../components/CategorySeller/CategoryBySellerList';


const CategoryBySellerScreen = props => {
    const { id, catName } = props.route.params;
    const colorSchema = useColorScheme();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchCategoryById(id))
    },[dispatch])
  return (
    <Box style={{ backgroundColor: Colors[colorSchema].background, height: '100%' }}>
        <Searchbar />
        <CategoryBySellerList categoryByListID={id} />
    </Box>
  );
};

export default CategoryBySellerScreen;
