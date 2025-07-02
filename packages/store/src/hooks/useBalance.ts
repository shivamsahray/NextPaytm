
import React, { useState, useEffect } from 'react';

import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance"

export const useBalance = () => {
    const value = useRecoilValue(balanceAtom);
    return value;
}   