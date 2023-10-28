import React from 'react';
import { Fragment, useState } from 'react';
import { CardBody, CardTitle, CardText, Label } from 'reactstrap';
import { Card, Avatar, Button, Typography, TextField, Box, FormControl, FormControlLabel, OutlinedInput, InputAdornment, IconButton, Checkbox } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import { toast, Slide } from 'react-toastify';
import logo from '@img/logo.png';
import styles from '@styles/login.module.scss';
import Image from 'next/image';

const ToastContent = ({ name, message }) => {
	if (name) {
		return (
			<Fragment>
				<div className={styles['toast-header']}>
					<h6 className={styles['toast-title']}>Bienvenido!</h6>
				</div>
				<div className={styles['toastify-body']}>
					<span>Has entrado con éxito en INTERCARGA. Ahora puedes empezar a explorar. ¡Que lo disfrutes!</span>
				</div>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div className={styles['toastify-header']}>
				<div className={styles['title-wrapper']}>
					<h6 className={styles['toast-title']}>Ocurrió un problema</h6>
				</div>
			</div>
			<div className={styles['toastify-body']}>
				<span>{message}</span>
			</div>
		</Fragment>
	)
}

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [usuario, setUsuario] = useState([]);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

	return (
		<div className={styles.authv1, styles['auth-wrapper']}>
			<div className={styles['auth-inner-login']}>
				<Card>
					<CardBody className={styles['card-body']}>
						<div className={styles['content-logo']}>
							<Image src={logo} alt="logo" width="50%" height="50%" layout="intrinsic" />
						</div>
						<CardTitle className={styles.title} tag='h4'>
							<Typography variant='span' className={styles.welcome} color="primary.text">Bienvenido!</Typography>
						</CardTitle>
						<CardText className={styles.text}>
							Somos una empresa que se dedica a el transporte.
						</CardText>
						<Formik
							initialValues={{
								email: '',
								password: ''
							}}
							onSubmit={async (values) => {
								if (values.email == 'dila@gmail.com') {
									toast.success(<ToastContent name="prueba" profile_photo={logo} />, {
										position: "top-right",
										autoClose: 5000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined,
										theme: "light"
									})
								} else {
									toast.error(<ToastContent message={'Credenciales invalidas'} />, {
										transition: Slide,
										hideProgressBar: true,
										autoClose: 5000
									})
								}
							}}>
							{({values, handleChange, errors}) => (
								<Form className={styles['auth-login-form']}>
									<Box className={styles['content-input']}>
										<Label className={styles['form-label']} form="login-email">Correo electronico</Label>
										<TextField
											autoFocus
											type="email"
											name="email"
											placeholder="john@example.com"
											color="primary"
											onChange={handleChange}
											value={values.email}
											className={styles['login-email']} />
									</Box>
									<Box className={styles['content-input']}>
										<div className={styles['label-password']}>
											<Label className={styles['form-label']} for="login-password">Contraseña</Label>
										</div>
										<FormControl sx={{ width: '100%' }} variant="outlined">
											<OutlinedInput
												id="outlined-adornment-password"
												type={showPassword ? 'text' : 'password'}
												name="password"
												onChange={handleChange}
												value={values.password}
												className={styles['login-password']}
												color="primary"
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleClickShowPassword}
															onMouseDown={handleMouseDownPassword}
															edge="end"
														>
															{showPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
												}
												placeholder="********"
											/>
										</FormControl>
										<FormControl sx={{ width: '100%', margin: '10px 0' }}>
											<Button variant="contained" color="primary" type="submit">
												<span className={styles['sign-in']}>Iniciar sesion</span>
											</Button>
										</FormControl>
										<FormControl>
											<span className={styles['new-platform']}>¿Es nuevo en nuestra plataforma? <a href="/create-account" className={styles['new-user']}>Crear cuenta</a></span>
										</FormControl>
									</Box>
								</Form>
							)}
						</Formik>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default Login;

