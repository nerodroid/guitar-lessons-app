import * as eva from "@eva-design/eva";
import { Button, Card, Input, Layout, Text } from "@ui-kitten/components";
import React, { Component, useEffect, useState } from "react";
import * as Yup from "yup";
import { LOGIN_STRINGS } from "../configs/strings";
import { Formik } from "formik";
import axios from "axios";
import { View, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAccessToken, setNewsData } from "../redux/actions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
  },
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,

    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
  apiCallError: {
    fontSize: 14,
    color: "red",
    paddingBottom: 10,
  },
});

const LoginScreen = ({ navigation }: { navigation: any }) => {
  var initialValues = { email: "", password: "" };

  //const navigation =  useNavigation();
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();
  const newsData = useSelector((state: RootStateOrAny) => state.newsReducer);

  const sendPostRequest = async () => {
    try {
      const resp = await axios.post("http://10.0.0.2:5001/auth/login", {
        data: {
          username: "shamalka4",
          password: "snov@123",
        },
      });
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkIsLoggedIn()
  }, [])

  const checkIsLoggedIn = async () => {
    const isLoggedIn = await AsyncStorage.getItem('@isLoggedIn')
    if(isLoggedIn === "true") {
      navigation.navigate("BottomTabMenu")
    }
  }

  const loginAPICall = (loginValues: { email: string; password: string }) => {

    navigation.navigate("BottomTabMenu");
    axios
      .post("http://10.0.2.2:5001/auth/login", {
        username: loginValues.email,
        password: loginValues.password,
      })
      .then(async (response) => {
        await AsyncStorage.setItem('@refresh_token', response.data.refreshToken)
        await AsyncStorage.setItem('@isLoggedIn', "true")
        dispatch(setAccessToken(response.data.accessToken))
        setLoginError("");
        navigation.navigate("BottomTabMenu")
        
      })
      .catch((error) => {
        console.log('login:', error);
        setLoginError(error.response.data.message.toString());
      });
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      //.email("Please enter valid email")
      .required("Email Address is Required"),
    password: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.loginContainer}>
        <Text category="h1">LOGIN</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => loginAPICall(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {
                <Text style={styles.errorText}>
                  {errors.email && touched.email ? errors.email : ""}
                </Text>
              }

              <TextInput
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
              />
              {
                <Text style={styles.errorText}>
                  {errors.password && touched.password ? errors.password : ""}
                </Text>
              }

              <Button
                onPress={() => handleSubmit()}
                style={{ marginTop: 20 }}
                disabled={!isValid}
              >
                Submit
              </Button>

              <Text style={styles.apiCallError}>{loginError}</Text>
            </>
          )}
        </Formik>
      </View>

      <Button
        onPress={() => navigation.navigate("RegScreen")}
        style={{ marginTop: 20, backgroundColor: "red" }}
      >
        Register
      </Button>
    </Layout>
  );
};

export default LoginScreen;
