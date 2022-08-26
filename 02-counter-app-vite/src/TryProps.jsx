import PropTypes from 'prop-types';

export const TryProps = ({title, nombre, phone, address}) => {

    return(
        <>
            <h2>{ title } </h2>
            <h3>Hola { nombre } </h3>
            <p>{ phone } </p>
            <p>{ address } </p>

        </>
    )
}

TryProps.defaultProps = {
    title: "Titulo principal (cambiar agregando una prop title en main.jsx/TryProps)",
    address: "Falta dirección"
}

TryProps.propTypes = {
    title: PropTypes.string.isRequired,
    nombre: PropTypes.string,
    phone: PropTypes.number,
}
