import React, {useRef} from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import {Typography, TextField, Grid, IconButton} from '@mui/material'
import {ComponentProps} from '../../model/ComponentProps'
import SideImageShopping from '../../assets/shopping-chart.jpg'
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoadingButton from '../LoadingButton'



const LoginScreen: React.FC<ComponentProps> = ({...props}) => {
  const emailOrPasswordRef = useRef<HTMLInputElement>(null)
  const initialValue = {
    email: '',
    password: '',
    remember_me: false,
    showPassword: false,
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Email salah, masukan email yang benar').required('Email tidak boleh kosong'),
    password: Yup.string().min(8, 'Kata sandi minimal 8 karakter').required('Kata sandi tidak boleh kosong')
  })

  const handleSubmit = () => {

  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={SideImageShopping} alt="ecommerce-icon" />
      </div>
      <div className='bg-black-primary flex flex-col justify-center'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='text-center'>
            <Typography variant={'h2'} className="text-center text-4xl leading-9 font-bold" sx={{color: '#FFF'}}>
              Masuk
            </Typography>
            <Typography className="px-4 md:px-16 mt-5 md:mt-8" sx={{color: '#FFF'}}>
              {`Masukan Email dan Kata sandi pada kolom dibawah ini`}
            </Typography>
          </div>
          <div className='mt-5 py-8 px-4 sm:px-10'>
            <Formik
              initialValues={initialValue}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({values, errors, ...formikProps}) => {
                return (
                  <Form id={'login-form'} aria-label='form' noValidate className='max-w-[400px] w-full mx-auto bg-black-primary p-8 px-8'>
                    <TextField
                      size='medium'
                      id={'email'}
                      type="email"
                      variant="outlined"
                      name="email"
                      margin={"normal"}
                      placeholder='text your email here...'
                      value={values.email}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.email && Boolean(errors.email)}
                      helperText={formikProps.touched.email && errors.email}
                      fullWidth
                      required
                      sx={{
                        '& .Mui-error': {borderRadius: 3},
                      }}
                      InputProps={{
                        style: {backgroundColor: '#515151', color: '#fff', borderRadius: 15},
                        sx: {border: 'none', backgroundColor: 'transparent'},
                        ref: emailOrPasswordRef,
                      }}
                    />
                    <TextField
                      size="medium"
                      id="password"
                      name={'password'}
                      variant={'outlined'}
                      placeholder='text your password here'
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={formikProps.handleChange}
                      error={formikProps.touched.password && Boolean(errors.password)}
                      helperText={formikProps.touched.password && errors.password}
                      fullWidth
                      required
                      sx={{
                        '& .Mui-error': {
                          borderRadius: 3,
                        }
                      }}
                      InputProps={{
                        style: {backgroundColor: '#515151', color: '#fff', borderRadius: 15},
                        sx: {border: 'none', backgroundColor: 'transparent'},
                        ref: emailOrPasswordRef,
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={() => {
                                formikProps.setValues({...values, showPassword: !values.showPassword})
                              }}
                              style={{color: '#9C9C9C'}}
                              onMouseDown={(event: any) => {
                                event.preventDefault()
                              }}
                            >
                              {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Grid item xs style={{textAlign: 'center', marginTop: 12}}>
                      <LoadingButton variant='contained' sx={{mt: 1}} fullWidth type="submit">
                        Masuk
                      </LoadingButton>
                    </Grid>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen