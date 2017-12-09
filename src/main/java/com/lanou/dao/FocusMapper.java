package com.lanou.dao;

import com.lanou.entity.Focus;

/**
 * Created by lanou on 2017/12/9.
 */
public interface FocusMapper {
    public Focus findFocusList(int uId);
    public boolean addToFocus(Focus focus);
    public boolean deleteFocus(int focusId);
    public boolean disFocus (Focus focus);
}
