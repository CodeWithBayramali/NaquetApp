import * as yup from 'yup'

export const sellerFormValidate = yup.object().shape({
    productId: yup.string().required("Ürün zorunlu alan"),
    categoryId: yup.string().required("Kategori zorunlu alan"),
    productName: yup.string().required("Ürün adı zorunlu alan"),
    description: yup.string().required("Açıklama zorunlu alan"),
    kg: yup.string().required("Kilogram belirtmek zorunludur"),
    price: yup.string().required("Fiyat zorunlu alan")
})

export const loginFormValidation = yup.object().shape({
    email:yup.string().email().required('Email zorunlu alan'),
    password:yup.string().required('Parola zorunlu')
})