import ReactPDF, { Document, Page, Text, Image } from "@react-pdf/renderer";

export default function NewForm() {
  return (
    <Document>
      <Page>
        <Text fixed>~ Created with react-pdf ~</Text>
        <Text>Don Quijote de la Mancha</Text>
        <Text>Miguel de Cervantes</Text>
        {/* <Image style={styles.image} src="/i" /> */}
        <Text>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
          D. Quijote de la Mancha
        </Text>
        <Text>
          En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
          mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
          antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
          carnero, salpicón las más noches, duelos y quebrantos los sábados,
          lentejas los viernes, algún palomino de añadidura los domingos,
          consumían las tres partes de su hacienda. El resto della concluían
          sayo de velarte, calzas de velludo para las fiestas con sus pantuflos
          de lo mismo, los días de entre semana se honraba con su vellori de lo
          más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una
          sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que
          así ensillaba el rocín como tomaba la podadera. Frisaba la edad de
          nuestro hidalgo con los cincuenta años, era de complexión recia, seco
          de carnes, enjuto de rostro; gran madrugador y amigo de la caza.
          Quieren decir que tenía el sobrenombre de Quijada o Quesada (que en
          esto hay alguna diferencia en los autores que deste caso escriben),
          aunque por conjeturas verosímiles se deja entender que se llama
          Quijana; pero esto importa poco a nuestro cuento; basta que en la
          narración dél no se salga un punto de la verdad
        </Text>
        <Text>
          Es, pues, de saber, que este sobredicho hidalgo, los ratos que estaba
          ocioso (que eran los más del año) se daba a leer libros de caballerías
          con tanta afición y gusto, que olvidó casi de todo punto el ejercicio
          de la caza, y aun la administración de su hacienda; y llegó a tanto su
          curiosidad y desatino en esto, que vendió muchas hanegas de tierra de
          sembradura, para comprar libros de caballerías en que leer; y así
          llevó a su casa todos cuantos pudo haber dellos; y de todos ningunos
          le parecían tan bien como los que compuso el famoso Feliciano de
          Silva: porque la claridad de su prosa, y aquellas intrincadas razones
          suyas, le parecían de perlas; y más cuando llegaba a leer aquellos
          requiebros y cartas de desafío, donde en muchas partes hallaba
          escrito: la razón de la sinrazón que a mi razón se hace, de tal manera
          mi razón enflaquece, que con razón me quejo de la vuestra fermosura, y
          también cuando leía: los altos cielos que de vuestra divinidad
          divinamente con las estrellas se fortifican, y os hacen merecedora del
          merecimiento que merece la vuestra grandeza.
        </Text>
        <Text>
          Con estas y semejantes razones perdía el pobre caballero el juicio, y
          desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
          sacara, ni las entendiera el mismo Aristóteles, si resucitara para
          sólo ello. No estaba muy bien con las heridas que don Belianis daba y
          recibía, porque se imaginaba que por grandes maestros que le hubiesen
          curado, no dejaría de tener el rostro y todo el cuerpo lleno de
          cicatrices y señales; pero con todo alababa en su autor aquel acabar
          su libro con la promesa de aquella inacabable aventura, y muchas veces
          le vino deseo de tomar la pluma, y darle fin al pie de la letra como
          allí se promete; y sin duda alguna lo hiciera, y aun saliera con ello,
          si otros mayores y continuos pensamientos no se lo estorbaran. Tuvo
          muchas veces competencia con el cura de su lugar (que era hombre docto
          graduado en Sigüenza), sobre cuál había sido mejor caballero, Palmerín
          de Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
          pueblo, decía que ninguno llegaba al caballero del Febo, y que si
          alguno se le podía comparar, era don Galaor, hermano de Amadís de
          Gaula, porque tenía muy acomodada condición para todo; que no era
          caballero melindroso, ni tan llorón como su hermano, y que en lo de la
          valentía no le iba en zaga.
        </Text>

        {/* <Text
        
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      /> */}
      </Page>
    </Document>
  );
}

// Font.register({
//   family: "Oswald",
//   src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
// });

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     fontFamily: "Oswald",
//   },
//   author: {
//     fontSize: 12,
//     textAlign: "center",
//     marginBottom: 40,
//   },
//   subtitle: {
//     fontSize: 18,
//     margin: 12,
//     fontFamily: "Oswald",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "Times-Roman",
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });

// ReactPDF.render(<NewForm />);
