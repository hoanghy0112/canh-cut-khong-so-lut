import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

const HomePage=() => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default HomePage