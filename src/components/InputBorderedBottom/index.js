import React from 'react';
import {TextInput, View, Dimensions, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
const index = (props) => {
  const {placeholder, value, onChange, icon,style, inputRef, keyType, onSubmit,  ...input} = props;
  const [onFocus, setFocus] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const {width} = Dimensions.get('screen');

  const styles = StyleSheet.create({
    input:{
      flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: onFocus || value != "" ? "#0099FF" : "#eee",
        overflow: 'hidden',
    }
  })
  return (
    <View
      style={[style,styles.input]}>
      <Icons
        name={icon}
        color={onFocus || value != ""  ? "#0099FF" : "#eee"}
        size={width / 16}
      />
      <TextInput
        returnKeyType={keyType}
        onSubmitEditing={onSubmit}
        ref={inputRef?inputRef:null}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onFocus={() => setFocus(!onFocus)}
        onBlur={() => setFocus(!onFocus)}
        secureTextEntry={show ? false : input.secureTextEntry}
        style={{
          width: input.secureTextEntry ? '80%' : '100%',
        }}
        {...input}
      />

      {input.secureTextEntry ? (
        <Icons
          name={show ?"eye-off":"eye"}
          color={show ? "#0099FF" : "#eee"}
          size={width / 16}
          onPress={() => setShow(!show)}
        />
      ) : null}
    </View>
  );
};

export default index;
