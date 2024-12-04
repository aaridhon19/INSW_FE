import './Navbar.css'

export default function Navbar() {
    const currentDate = new Date();
    const formattedDay = currentDate.toLocaleDateString('id-ID', {
        weekday: 'long',
    });
    const formattedDate = currentDate.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const formattedTime = currentDate.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).replace('.', ':');

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" />
                    <div className="navbar-right">
                        <div className="navbar-date">
                            <span>{formattedDay}, {formattedDate} - {formattedTime}</span>
                        </div>
                        <div className="navbar-notification" />
                        <div className="navbar-profile" />
                    </div>
                </div>
            </nav>
        </div>
    )
}