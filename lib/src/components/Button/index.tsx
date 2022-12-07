import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.css';

export interface Props<Name> extends Omit<React.HTMLProps<HTMLButtonElement>, 'name' | 'onChange'>{
    className?: string;
    name: Name;
    onChange?: (name: Name) => void;
    type?: 'button' | 'submit' | 'reset';
}

function Button<Name>(props: Props<Name>) {
    const {
        className,
        name,
        onChange,
        type = 'button',
        ...otherProps
    } = props;

    const handleChange = React.useCallback(
        () => {
            if (onChange) {
                onChange(name);
            }
        },
        [name, onChange],
    );

    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            onChange={handleChange}
            className={_cs(styles.button, className)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default Button;
