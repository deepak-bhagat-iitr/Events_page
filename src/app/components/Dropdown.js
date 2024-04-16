import Link from 'next/link';

const Dropdown = () => {
    return (
        <div id="nav-dropdown" class="nav-dropdown">
            <ul>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Speakers</Link></li>
                <li><Link href="#">Partners</Link></li>
                <li><Link href="#">Events</Link></li>
                <li><Link href="#">Tickets</Link></li>
                <li><Link href="#">HiRes</Link></li>
                <li><Link href="#">Agenda</Link></li>
                <Link href="#" class="dropdown-button drop-btn">Login</Link>
                <Link href="#" class="dropdown-button drop-btn">Register</Link>
            </ul>

        </div>

    );
};

export default Dropdown;
