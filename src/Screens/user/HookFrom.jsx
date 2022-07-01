import { React, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function HookFrom() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ID: '',
      Name: '',
      Password: '',
      Sex: '',
      Introduce: '',
      Mail: '',
    },
  });

  const fetchUpdate = async (id, name, sex, password, introduce, mail) => {
    const formdata = new FormData();
    formdata.append('ID', id);
    formdata.append('Name', name);
    formdata.append('Sex', sex);
    formdata.append('Password', password);
    formdata.append('Introduce', introduce);
    formdata.append('Mail', mail);

    console.log('formdata============', formdata);

    fetch('https://vietsocials.000webhostapp.com/api/user/update.php', {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const onSubmit = async (datalll) => {
    console.log('data: ', datalll);
    const data = fetchUpdate(
      datalll.ID,
      datalll.Name,
      datalll.Password,
      datalll.Sex,
      datalll.Introduce,
      datalll.Mail
    );
    data;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>ID</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="ID"
        />
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="Name"
        />
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="Password"
        />
        <Text style={styles.label}>Sex</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="Sex"
        />

        <Text style={styles.label}>Introduce</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="Introduce"
        />

        <Text style={styles.label}>Mail</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="Mail"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text>Sumit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
