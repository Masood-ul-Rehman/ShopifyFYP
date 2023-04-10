import {useState} from 'react';
import Button from '../components/Button';

function ResetPassword() {

    const [formData, setFormData] = useState({
        email: "",
      });
    
      const { email } = formData;


      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const onSubmit = (e) => {
        e.preventDefault();
    
        const userData = {
          email,
        };
    }




  return (
    <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mx-auto w-full sm:max-w-xl">
          <div className="bg-white pt-12 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h3 className="text-center font-poppins text-neutral-800 text-4xl">
              Reset Password
            </h3>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="example123@gmail.com"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>

            <div className="mt-12">
              <Button styles={"m-auto px-12"} primaryGrad type={"submit"}>
                Reset password
              </Button>
            </div>

            
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
