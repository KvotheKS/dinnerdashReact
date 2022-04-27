import "./Navbar.css"
export default function Navbar() {
    return (
        <nav class ="navbar">
            <li class="navbar_item">
                <a href="#" class="navbar_link" id="pedidos-link">Pedidos</a>
            </li>
            <li class="navbar_item">
                <a href="#" class="navbar_link" id="usarios-link">Usuários</a>
            </li>
            <li class="navbar_item">
                <a href="#" class="navbar_link" id="refeicoes-link">Refeições</a>
            </li>
            <li class="navbar_item">
                <a href="#" class="navbar_link" id="refeicoes-cat-link">Categorias de Refeição</a>
            </li>
        </nav>
    );
}