package com.lanou.ServiceImpl;

import com.lanou.Service.FocusService;
import com.lanou.dao.FocusMapper;
import com.lanou.entity.Focus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by lanou on 2017/12/9.
 */
@Service("focusService")
public class FocusServiceImpl implements FocusService {

    @Autowired
    private FocusMapper focusMapper;

    public Focus findFocusList(int uId) {
        return focusMapper.findFocusList(uId);
    }

    public boolean addToFocus(Focus focus) {
        return focusMapper.addToFocus(focus);
    }

    public boolean disFocus(Focus focus) {
        return focusMapper.disFocus(focus);
    }

    public boolean deleteFocus(int focusId) {
        return focusMapper.deleteFocus(focusId);
    }

}
