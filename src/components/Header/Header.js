import './Header.css'
export default function Header() {
    return (
        <header class="header" style={{height:'38vh'}}>
            <div class="header_container">
                <h1 class="header_logo" style={{fontSize:'4vh'}}>dinnerdash</h1>
                <ul class="header_menu">
                    <li>
                        <a href="#" class="header_link" id="backoffice-link">backoffice</a>
                    </li>
                    <li>
                        <a href="#" class="header_link" id="perfil-link">perfil</a>
                    </li>
                    <li>
                        <a href="#" class="header_link" id="sair-link">sair</a>
                    </li>
                </ul>
                <ul class="header_title">
                    <li style={{fontSize: '4vh'}}>Backoffice</li>
                    <li style={{color: 'rgba(255, 255, 255, 0.790)'}}>Gerencie pedidos, refeições e mais.</li>                    
                </ul>
            </div>
        </header>
    );
}