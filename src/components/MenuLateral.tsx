import MenuItem from './MenuItem';
import { iconeCasa, iconeAjustes } from './icons/index';
import Logo from './Logo';
export default function MenuLateral() {
    return (
        <aside>
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-300 h-20 w-20">
                <Logo/>
            </div>
            <ul>
                <MenuItem url="/" texto='Início' icone={iconeCasa}/>
                <MenuItem url="/ajustes" texto='Ajustes' icone={iconeAjustes}/>
            </ul>
        </aside>
    )
}
