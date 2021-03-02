import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
} from 'react-native';
import InputBorderedBottom from '../components/InputBorderedBottom';
import {imageURI} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {Images} from '../../assets/images';
import {ubahPengguna} from '../redux/actions/pengguna';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function EditAkun({navigation}) {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {pengguna} = useSelector((state) => state.pengguna);
  const [foto, setFoto] = React.useState(null);
  const [vfoto, setVfoto] = React.useState(null);
  const [nama, setNama] = React.useState(pengguna.nama);
  const [email, setEmail] = React.useState(pengguna.email);
  const [noHp, setNoHp] = React.useState('0' + pengguna.no_hp.toString());
  const [alamat, setAlamat] = React.useState(pengguna.alamat);

  const inputEmail = React.useRef();
  const inputNoHp = React.useRef();
  const inputAlamat = React.useRef();
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);
  const formData = new FormData();

  const ubah = () => {
    formData.append('nama', nama);
    formData.append('no_hp', noHp);
    formData.append('email', email);
    formData.append('alamat', alamat);
    formData.append('foto', foto);
    dispatch(ubahPengguna(token, formData));
    navigation.goBack();
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        takePhotoFromCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const takePhotoFromCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
      },
      (response) => {
        console.log(response);
        setVfoto({uri: response.uri});
        setFoto({
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
      },
    );
  };

  const choosePhotoFromLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        console.log(response);
        setVfoto({uri: response.uri});
        setFoto({
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
      },
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Foto</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={requestCameraPermission}>
          <Text style={styles.panelButtonTitle}>Ambil Gambar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Pilih dari Galeri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => sheetRef.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Batal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.penggunaCard}>
          <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
            <Image
              source={vfoto === null ? {uri: imageURI + pengguna.foto} : vfoto}
              style={styles.images}
            />
          </TouchableOpacity>

          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputEmail.current.focus()}
            icon="user"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(text) => setNama(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            inputRef={inputEmail}
            keyType="next"
            onSubmit={() => inputNoHp.current.focus()}
            icon="mail"
            placeholder="Email"
            value={email}
            onChange={(text) => setEmail(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            inputRef={inputNoHp}
            keyType="next"
            onSubmit={() => inputAlamat.current.focus()}
            icon="phone"
            placeholder="No. Handphone"
            value={noHp}
            onChange={(text) => setNoHp(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />
          <InputBorderedBottom
            inputRef={inputAlamat}
            keyType="next"
            // onSubmit={() => inputPassword.current.focus()}
            icon="map-pin"
            placeholder="Alamat"
            value={alamat}
            onChange={(text) => setAlamat(text)}
            style={{marginVertical: 10}}
            returnKeyType="send"
          />

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#0099ff'}]}
            onPress={ubah}>
            <Text style={{color: 'white'}}>Ubah</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[360, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction
        enabledContentGestureInteraction={false}
        enabledContentTapInteraction
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    paddingTop: 10,
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
  },
  penggunaCard: {
    backgroundColor: 'white',
    padding: 30,
    elevation: 10,
    borderRadius: 10,
    width: '95%',
    marginBottom: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    color: '#0099ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  images: {
    height: 100,
    width: 100,
    borderColor: '#0099ff',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#0099ff',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.7,
    borderBottomWidth: 0,
    borderColor: '#eee',
  },
});
