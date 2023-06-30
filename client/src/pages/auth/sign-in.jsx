import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";

const API = import.meta.env.VITE_API_URL;

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const loginUser = async (e)  => {
      e.preventDefault();//Para que no se recarge la pagina y la terminal

      // console.log(API);//Para comprobar que si escucha a mi API

      const response = await fetch(`${API}/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email, password
          })
      });

      const data = await response.json();
      console.log(data);
      
      //MANEJO DE ERRORES DESDE EL FRONTEND, desde el backend resivimos el response con un atributo message
      if (data && !data.error && data.exist==true) {
          // username_user = data.username;
          navigate('/meeting');
      }
  }
  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input 
              variant="standard" 
              type="email" 
              label="Email" 
              size="lg" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              autoComplete="on"
            />  
            <Input
              variant="standard"
              type="password"
              label="Password"
              size="lg"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={loginUser} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignIn;
