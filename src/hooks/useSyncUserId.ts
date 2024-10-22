import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserId, setUserId } from '@/store/slices/accountSlice';

export const useSyncUserId = () => {
  const { userId: paramUserId } = useParams<{ userId: string }>();
  const reduxUserId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramUserId && paramUserId !== reduxUserId) {
      dispatch(setUserId(paramUserId));
    }
  }, [paramUserId, reduxUserId, dispatch, navigate]);
};
