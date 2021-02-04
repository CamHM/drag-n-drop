import './Moon.css';

type Props = {
    width: number;
    opacity?: number;
};

const Moon = ({ width, opacity }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.96 91.67" width={width} opacity={opacity}>
            <g id="Capa_2" data-name="Capa 2">
                <g id="Capa_1-2" data-name="Capa 1">
                    <path className="moon--1"
                          d="M74.89,81.19A45.76,45.76,0,1,1,45.83.07c1,0,2,0,3,.1a46.55,46.55,0,0,0,26.07,81"/>
                    <path className="moon--2"
                          d="M74.46,80.85A46.14,46.14,0,0,1,48.69.6M74.46,80.85A45.29,45.29,0,1,1,45.73.5c1,0,2,0,3,.1"/>
                </g>
            </g>
        </svg>
    )
}

export default Moon;
