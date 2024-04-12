import Post from "./components/Post";

import { Container } from "./styled";


function App() {
  return (
    <Container>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/747391/miniatura_batmovel_batman_classic_tv_series_1966_c_4_figuras_1_24_jada_toys_14714_1_a985113c854ce93be3830a0895a73583.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </Container>
  );
}

export default App;
