import { useTranslation } from 'next-i18next';
import React from 'react';
import { IValues } from '../types';
import DesktopValues from './desktop';
import MobileValues from './mobile';

const Values = ({ deviceType, values }: IValues) => {
    const { t } = useTranslation('r2Home');

    return (
        <>
            {deviceType === "mobile"
                ? <MobileValues values={values} />
                : <DesktopValues values={values}/>}

        </>
    );
}

export default Values;
