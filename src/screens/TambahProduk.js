import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid
} from 'react-native';
import InputBorderedBottom from '../components/InputBorderedBottom';
import {useDispatch, useSelector} from 'react-redux';
import {tambahProduk} from '../redux/actions/produk';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Images} from '../../assets/images';

export default function TambahProduk({navigation}) {
  const dispatch = useDispatch()
  const {token} = useSelector((state) => state.auth);
  const [foto, setFoto] = React.useState(null);
  const [vfoto, setVfoto] = React.useState(null);
  const [nama, setNama] = React.useState('');
  const [harga, setHarga] = React.useState('');
  const [stok, setStok] = React.useState('');
  const [deskripsi, setDeskripsi] = React.useState('');
  const inputharga = React.useRef();
  const inputstok = React.useRef();
  const inputdeskripsi = React.useRef();
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);
  const formData = new FormData();

  const tambah = () => {
    formData.append('nama', nama);
    formData.append('harga', harga);
    formData.append('stok', stok);
    formData.append('deskripsi', deskripsi);
    formData.append('foto', foto);
    dispatch(tambahProduk(token, formData));
    navigation.navigate('Produk');
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
        if(!response.didCancel){
          setVfoto({uri: response.uri});
        }
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
        if(!response.didCancel){
          setVfoto({uri: response.uri});
        }
        
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
        <View style={styles.produkCard}>
          <TouchableOpacity
            onPress={() => sheetRef.current.snapTo(0)}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width:'100%',
            }}>
            {/* <Icons name="plus-square" size={50} color="#eee" />*/}
            <Text style={{color: '#999999', marginHorizontal:30}}>Foto</Text>

            <Image
              source={vfoto === null ? Images.no_images : vfoto}
              style={styles.images}
            />
          </TouchableOpacity>
          <InputBorderedBottom
            keyType="next"
            onSubmit={() => inputharga.current.focus()}
            icon="package"
            placeholder="Nama Produk"
            value={nama}
            onChange={(text) => setNama(text)}
            style={{marginVertical: 10}}
          />
          <InputBorderedBottom
            inputRef={inputharga}
            keyType="next"
            keyboardType="number-pad"
            onSubmit={() => inputstok.current.focus()}
            icon="dollar-sign"
            placeholder="Harga dalam rupiah"
            value={harga}
            onChange={(text) => setHarga(text)}
            style={{marginVertical: 10}}
          />
          <InputBorderedBottom
            inputRef={inputstok}
            keyType="next"
            keyboardType="number-pad"
            onSubmit={() => inputdeskripsi.current.focus()}
            icon="layers"
            placeholder="Stok"
            value={stok}
            onChange={(text) => setStok(text)}
            style={{marginVertical: 10}}
          />
          <InputBorderedBottom
            inputRef={inputdeskripsi}
            keyType="next"
            // onSubmit={() => inputPassword.current.focus()}
            icon="edit"
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(text) => setDeskripsi(text)}
            style={{marginVertical: 10}}
          />

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#0099ff'}]} onPress={tambah} >
            <Text style={{color: 'white'}}>Tambah</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 0]}
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
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    paddingHorizontal: 10,
  },
  produkCard: {
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
    // borderColor: '#0099ff',
    // borderWidth: 3,
    // borderRadius: 20,
    // backgroundColor: 'white',
    // padding: 10,
    // resizeMode:'stretch'
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
