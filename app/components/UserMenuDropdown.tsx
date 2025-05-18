import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { PiArticleThin } from "react-icons/pi";
import { LoginContext } from "~/root";

export default function UserMenuDropdown() {
    const login = useContext(LoginContext);
    return (
        <Dropdown  autoClose="outside">
            <Dropdown.Toggle bsPrefix="btn" variant="white"
                className="btn-profile border border-1 rounded-pill d-flex align-items-center p-2"
            >
                <PiArticleThin className="me-2" />
                <CgProfile />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div className={`${!login.userLogin && "d-none"}`}>
                    <Dropdown.Item>
                        Zarejestruj się
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => login.setUserLogin(!login.userLogin)}
                    >
                        Zaloguj się
                    </Dropdown.Item>
                    <Dropdown.Divider />
                </div>
                <div className={`${login.userLogin && "d-none"}`}>
                    <Dropdown.Item>Wiadomości</Dropdown.Item>
                    <Dropdown.Item>Powiadomienia</Dropdown.Item>
                    <Dropdown.Item>Podróże</Dropdown.Item>
                    <Dropdown.Item>Lista życzeń</Dropdown.Item>
                    <Dropdown.Divider />
                </div>
                <div>
                    <Dropdown.Item>
                        Karty Podarunkowe
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Wynajmij swój dom na Aribnb
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Zostań gospodarzem atrakcji
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Centrum pomocy
                    </Dropdown.Item>
                </div>
                <div className={`${login.userLogin && "d-none"}`}>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        onClick={() => login.setUserLogin(!login.userLogin)}
                    >
                        Wyloguj
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}