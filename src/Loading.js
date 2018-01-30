import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ isLoading, errorMessage, children }) => {
    if (isLoading || errorMessage) {
        return (
            <div className="kwfUp-reactLoading">
                {isLoading && <div className="kwfUp-reactLoading__loading" />}
                {!!errorMessage &&
                    <div className="kwfUp-reactLoading__error">
                        {errorMessage}
                    </div>
                }
            </div>
        );
    }

    return children;
};

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    children: PropTypes.element
};

export default Loading;
