import { Field, Formik, Form } from 'formik';
import React, { useState } from 'react';
import { InputField } from '../../components/fields/inputFields';

const Setup = () => {
  const [imgState, setImgState] = useState({
    path: '',
  });

  let [pic, setPic] = useState(false);

  return (
    <div className="items-center justify-center w-11/12 text-center flex">
      <div className="bg-alternative flex rounded-2xl shadow-2xl w-11/12 max-w-4xl">
        <div className=" w-3/5 py-12 px-14 bg-primary rounded-tl-2xl rounded-bl-2xl">
          <label className="text-alternative font-bold text-lg">
            User settings
          </label>
          <div className="text-left font-bold text-alternative my-4">
            <Formik
              // Den här biten måste ändras lite så att den faktiskt skickar in till databasen
              onSubmit={(data) => {
                console.log(data);
              }}
              initialValues={{
                userName: '',
                firstName: '',
                lastName: '',
                day: '',
                month: '',
                year: '',
                gender: '',
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col ">
                  <div className="flex flex-col space-y-6">
                    <Field
                      className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                      name="userName"
                      placeholder="Username"
                      component={InputField}
                    />
                    <Field
                      className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                      name="firstName"
                      placeholder="First Name"
                      component={InputField}
                    />
                    <Field
                      className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                      name="lastName"
                      placeholder="Last Name"
                      component={InputField}
                    />
                    <div className="flex text-center justify-between items-center">
                      <Field
                        className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                        name="day"
                        component="select"
                      >
                        <option label="Day">Day{''}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </Field>
                      <Field
                        className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                        name="month"
                        component="select"
                      >
                        <option label="Month">Month{''}</option>
                        <option value="january">January</option>
                        <option value="febuary">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </Field>
                      <Field
                        className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                        name="year"
                        component="select"
                      >
                        <option label="Year">{''}</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </Field>
                      <div className="relative flex flex-col items-center group hover:cursor-pointer">
                        <img src="icons/information.svg" width="28px" />
                        <div className="absolute bottom-0 flex-col text-center hidden mb-6 group-hover:flex">
                          <span className="bg-alternative px-4 py-2 text-xs text-primary shadow-lg rounded-md whitespace-nowrap mb-2 ">
                            Date of Birth
                          </span>
                        </div>
                      </div>
                    </div>
                    <Field
                      name="gender"
                      className="rounded-full px-4 py-1 placeholder:text-alternative outline-alternative"
                      component="select"
                    >
                      <option value="" label="Select a gender">
                        Select a gender{''}
                      </option>
                      <option value="man">Man</option>
                      <option value="woman">Woman</option>
                      <option value="other">Other</option>
                    </Field>
                    <button
                      className="bg-alternative text-primary rounded-2xl hover:bg-primary hover:text-alternative hover:ring-2 hover:ring-alternative py-2 px-6 duration-100 mt-4 font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="w-2/5 bg-alternative rounded-tr-2xl rounded-br-2xl py-12 px-14 text-primary">
          <label className="font-bold text-lg">Profile picture</label>
          <div className="w-full py-6">
            <img
              className={`ring-primary rounded ${
                imgState.path === '' ? '' : 'ring-2'
              }`}
              src={imgState?.path}
              id="preview-image"
            />
          </div>
          <Formik
            initialValues={{
              digital_signature: '',
            }}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {(handleSubmit) => (
              <Form>
                <label
                  htmlFor="photo"
                  className="flex flex-col text-center bg-primary text-alternative rounded-2xl hover:ring-2 hover:bg-alternative hover:ring-primary hover:text-primary py-2 px-6 duration-100 font-bold"
                >
                  Upload
                  <input
                    id="photo"
                    hidden
                    name="digital_signature"
                    accept="image/*"
                    type="file"
                    onChange={(event: any) => {
                      if (event.target.files.length !== 0) {
                        setImgState({
                          ...imgState,
                          path: URL.createObjectURL(event.target.files[0]),
                        });
                      }
                      handleSubmit.setFieldValue(
                        'digital_signature',
                        event.target.files[0]
                      );
                    }}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-primary text-alternative rounded-2xl hover:ring-2 hover:bg-alternative hover:ring-primary hover:text-primary py-2 px-6 duration-100 mt-5 font-bold"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Setup;
