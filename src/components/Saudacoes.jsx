// import { useContext } from "react";
// import { View } from "react-native";
// import { Text } from "react-native-paper";

// function SaudacaoPrimeira(){
//     const {usuario} = useContext(usuarioContext);
//     return(
//       <View>
//         <Text> Seja Bem VIndo {usuario} </Text>
//         <VejaSeuCarrinho />
//       </View>
//     )
//   }

//   function SaudacaoMaster(){
//     const usuario = useContext(usuarioContext);
//     return(
//         <View>
//             <Text> olá {usuario}</Text>
//             <SaudacaoPrimeira />
//         </View>
//     );
//   }
  
//   function VejaSeuCarrinho() {
//     const { setUsuario, usuario } = useContext(usuarioContext);
//     setUsuario ("draculao viuvo")
//     return(
//       <View>
//         <Text> seu carrinho está vazio {usuario} </Text>
//       </View>
//     )
//   }

//   export default { 
//     SaudacaoPrimeira,
//     VejaSeuCarrinho,
//     SaudacaoMaster
// };