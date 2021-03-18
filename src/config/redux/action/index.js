import firebase, { database, storage } from "../../firebase";

//auth
export const signInToDatabase = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.username, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_LOGIN", value: true });
        resolve(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("login error\n" + errorMessage + "\ncode : " + errorCode);
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject("gagal", errorMessage);
      });
  });
};

//create
export const addDataToAPI = (path, data, file, fullDate) => (dispatch) => {
  const uploadTask = storage.ref(`/${path}/${fullDate}/${file.name}`).put(file);
  return new Promise((resolve, reject) => {
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref(`${path}/${fullDate}`)
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          switch (path) {
            case "berita":
              dispatch({ type: "CHANGE_LOADING", value: false });
              database
                .ref(`/${path}`)
                .push({
                  img: url,
                  judul: data.judul,
                  penulis: data.penulis,
                  isi: data.isi,
                  posted: fullDate,
                })
                .then((res) => {
                  dispatch({ type: "CHANGE_LOADING", value: false });
                  dispatch({ type: "CHANGE_SUCCESS", value: true });
                  resolve(res);
                })
                .catch((err) => {
                  dispatch({ type: "CHANGE_LOADING", value: false });
                  alert(err);
                  reject(err);
                });
              break;
            case "kegiatan":
              dispatch({ type: "CHANGE_LOADING", value: false });
              database
                .ref(`/${path}`)
                .push({
                  img: url,
                  judul: data.judul,
                  penulis: data.penulis,
                  isi: data.isi,
                  lokasi: data.lokasi,
                  posted: fullDate,
                  waktu: {
                    pukul: data.waktu,
                    tanggal: data.tanggal,
                    bulan: data.bulan,
                    tahun: data.tahun,
                  },
                })
                .then((res) => {
                  dispatch({ type: "CHANGE_LOADING", value: false });
                  dispatch({ type: "CHANGE_SUCCESS", value: true });
                  resolve(res);
                })
                .catch((err) => {
                  dispatch({ type: "CHANGE_LOADING", value: false });
                  alert(err);
                  reject(err);
                });
              break;
            default:
              break;
          }
        })
        .catch((e) => {
          dispatch({ type: "CHANGE_LOADING", value: false });
          alert(e);
          reject(e);
        });
    });
  });
};

export const UploadDataAPI = (path, fullDate, file) => (dispatch) => {
  const uploadTask = storage.ref(`/${path}/${fullDate}/${file.name}`).put(file);
  return new Promise((resolve, reject) => {
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref(`${path}/${fullDate}`)
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          dispatch({ type: "CHANGE_LOADING", value: false });
          dispatch({ type: "CHANGE_URL", value: url });
          resolve();
        })
        .catch((e) => {
          dispatch({ type: "CHANGE_LOADING", value: false });
          alert(e);
          reject(e);
        });
    });
  });
};

//read
export const getDataFromAPI = (path) => (dispatch) => {
  const datas = database.ref(path);
  return new Promise((resolve, reject) => {
    datas.on("value", (snapshot) => {
      const data = [];
      if (snapshot.val()) {
        // MEMBUAT OBJECT MENJADI ARRAY
        Object.keys(snapshot.val()).map((key) => {
          return data.push({
            id: key,
            data: snapshot.val()[key],
          });
        });
        dispatch({ type: `CHANGE_${path.toUpperCase()}`, value: data });
        dispatch({ type: "CHANGE_DATA", value: data });
        dispatch({ type: "CHANGE_EXIST", value: true });
        resolve(data);
      } else {
        dispatch({ type: "CHANGE_EXIST", value: false });
      }
    });
  });
};

export const getDataArticle = (path) => (dispatch) => {
  const datas = database.ref(path);
  return new Promise((resolve, reject) => {
    datas.on("value", (snapshot) => {
      if (snapshot.val()) {
        dispatch({
          type: `CHANGE_ARTICLE`,
          value: snapshot.val(),
        });
        dispatch({ type: "CHANGE_EXIST", value: true });
        resolve(snapshot.val());
      } else {
        dispatch({ type: "CHANGE_EXIST", value: false });
      }
    });
  });
};

//update
export const updateDatatoAPI = (path, data, file, fullDate, id) => (
  dispatch
) => {
  dispatch({ type: "CHANGE_UPDATE", value: true });
  return new Promise((resolve, reject) => {
    if (file !== null) {
      const uploadTask = storage
        .ref(`/${path}/${fullDate}/${file.name}`)
        .put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref(`${path}/${fullDate}`)
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            dispatch({ type: "CHANGE_LOADING", value: false });
            switch (path) {
              case "berita":
                database
                  .ref(`${path}/${id}`)
                  .set({
                    img: url,
                    judul: data.judul,
                    penulis: data.penulis,
                    isi: data.isi,
                    posted: fullDate,
                  })
                  .then((res) => {
                    dispatch({ type: "CHANGE_LOADING", value: false });
                    dispatch({ type: "CHANGE_SUCCESS", value: true });
                    resolve(res);
                  })
                  .catch((e) => {
                    dispatch({ type: "CHANGE_LOADING", value: false });
                    alert(e);
                    reject(e);
                  });
                break;
              case "kegiatan":
                database
                  .ref(`${path}/${id}`)
                  .set({
                    img: url,
                    judul: data.judul,
                    penulis: data.penulis,
                    isi: data.isi,
                    lokasi: data.lokasi,
                    posted: fullDate,
                    waktu: {
                      pukul: data.waktu,
                      tanggal: data.tanggal,
                      bulan: data.bulan,
                      tahun: data.tahun,
                    },
                  })
                  .then((res) => {
                    dispatch({ type: "CHANGE_LOADING", value: false });
                    dispatch({ type: "CHANGE_SUCCESS", value: true });
                    resolve(res);
                  })
                  .catch((e) => {
                    dispatch({ type: "CHANGE_LOADING", value: false });
                    alert(e);
                    reject(e);
                  });
                break;
              default:
                break;
            }
          })
          .catch((e) => {
            dispatch({ type: "CHANGE_LOADING", value: false });
            alert(e);
            reject(e);
          });
      });
    } else {
      switch (path) {
        case "berita":
          database
            .ref(`${path}/${id}`)
            .update({
              judul: data.judul,
              penulis: data.penulis,
              isi: data.isi,
              posted: fullDate,
            })
            .then((res) => {
              dispatch({ type: "CHANGE_LOADING", value: false });
              dispatch({ type: "CHANGE_SUCCESS", value: true });
              resolve(res);
            })
            .catch((e) => {
              dispatch({ type: "CHANGE_LOADING", value: false });
              alert(e);
              reject(e);
            });
          break;
        case "kegiatan":
          database
            .ref(`${path}/${id}`)
            .update({
              judul: data.judul,
              penulis: data.penulis,
              isi: data.isi,
              lokasi: data.lokasi,
              posted: fullDate,
              waktu: {
                pukul: data.waktu,
                tanggal: data.tanggal,
                bulan: data.bulan,
                tahun: data.tahun,
              },
            })
            .then((res) => {
              dispatch({ type: "CHANGE_LOADING", value: false });
              dispatch({ type: "CHANGE_SUCCESS", value: true });
              resolve(res);
            })
            .catch((e) => {
              dispatch({ type: "CHANGE_LOADING", value: false });
              alert(e);
              reject(e);
            });
          break;
        default:
          break;
      }
    }
  });
};

//delete
export const deleteDataAPI = (path, id) => (dispatch) => {
  const dataAPI = database.ref(`${path}/${id}`);
  return new Promise((resolve, reject) => {
    if (id !== null) {
      dataAPI
        .remove()
        .then((res) => {
          console.log("res", res);
          alert("sukses hapus\n", res);
          resolve(res);
        })
        .catch((e) => {
          alert("gagal menghapus\n", e);
          reject(e);
        });
    }
  });
};

// export const changeShowModal = (value) => (dispatch) => {
//   dispatch({ type: "CHANGE_SHOWMODAL", value: value });
// };

// export const getDataAPI = (id) => (dispatch) => {
//   const dataAPI = database.ref("users/" + id);
//   return new Promise((resolve, reject) => {
//     dataAPI.on("value", (snapshot) => {
//       dispatch({ type: "CHANGE_USER", value: snapshot.val() });
//       resolve(snapshot.val());
//     });
//   });
// };

// export const updateUserAPI = (data, id) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     database.ref(`users/${id}`).set(data, (err) => {
//       if (err) {
//         reject(false);
//       } else {
//         resolve(true);
//       }
//     });
//   });
// };

// export const addDataToAPI = (data) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     database
//       .ref(`users/`)
//       .push({
//         fName: data.fName,
//         lName: data.lName,
//         num: data.num,
//         sex: data.sex,
//         birth: data.birth,
//         date: data.date,
//         month: data.month,
//         year: data.year,
//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         console.log("error", err);
//         reject(err);
//       });
//   });
// };
