import * as eva from "@eva-design/eva";
import { Button, Card, Input, Layout, Text } from "@ui-kitten/components";
import React, { Component, useEffect, useState } from "react";
import * as Yup from "yup";
import { LOGIN_STRINGS } from "../configs/strings";
import { Formik } from "formik";
import axios from "axios";
import { View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
  },
  textInput: {
    height: 35,
    width: "100%",
    margin: 5,

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

const RegScreen = ({ navigation }: { navigation: any }) => {
  interface RegValues {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
  }

  var initialValues = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    userType: "",
  };

  const [regError, setRegError] = useState("");

  const sendPostRequest = async () => {
    try {
      const resp = await axios.post("http://10.0.0.2:5000/auth/login", {
        data: {
          username: "shamalka4",
          password: "snov@123",
        },
      });
      console.log("login");
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const regAPICall = (regValues: RegValues) => {
    //setRegError('');
    console.log(regValues);
    axios
      .post(
        "http://10.0.2.2:5000/users",

        regValues
      )
      .then((response) => {
        console.log(response.data);
        setRegError("");
      })
      .catch((error) => {
        try {
          setRegError(error.response.data.message.toString());
          console.log(error.response.data.message);
        } catch {
          setRegError("Unknown Error Occurred");
          console.log("Unknown Error Occurred");
        }
      });
  };

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string()
      //.email("Please enter valid email")
      .required("Email Address is Required"),

    email: Yup.string()
      //.email("Please enter valid email")
      .required("Email Address is Required"),
    firstName: Yup.string()
      //.email("Please enter valid email")
      .required("Email Address is Required"),
    lastName: Yup.string()
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
          onSubmit={(values) => regAPICall(values)}
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
                placeholder="User Name"
                style={styles.textInput}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {
                <Text style={styles.errorText}>
                  {errors.username && touched.username ? errors.username : ""}
                </Text>
              }
              <TextInput
                placeholder="First Name"
                style={styles.textInput}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
              />
              {
                <Text style={styles.errorText}>
                  {errors.firstName && touched.firstName
                    ? errors.firstName
                    : ""}
                </Text>
              }
              <TextInput
                placeholder="Last Name"
                style={styles.textInput}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
              />
              {
                <Text style={styles.errorText}>
                  {errors.lastName && touched.lastName ? errors.lastName : ""}
                </Text>
              }

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
                placeholder="User Type"
                style={styles.textInput}
                onChangeText={handleChange("userType")}
                onBlur={handleBlur("userType")}
                value={values.userType}
                keyboardType="email-address"
              />
              {
                <Text style={styles.errorText}>
                  {errors.userType && touched.userType ? errors.userType : ""}
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
                style={{ marginTop: 20, backgroundColor: "red" }}
                disabled={!isValid}
              >
                Submit
              </Button>

              <Text style={styles.apiCallError}>{regError}</Text>
            </>
          )}
        </Formik>
      </View>

      <Button
        onPress={() => navigation.navigate("LoginScreen")}
        style={{ marginTop: 20 }}
      >
        Login
      </Button>
    </Layout>
  );
};

export default RegScreen;
