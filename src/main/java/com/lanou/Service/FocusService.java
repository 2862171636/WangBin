package com.lanou.Service;

import com.lanou.entity.Focus;

/**
 * Created by lanou on 2017/12/9.
 */
public interface FocusService {
    public Focus findFocusList(int uId);
    public boolean deleteFocus(int focusId);
    public boolean addToFocus(Focus focus);
    public boolean disFocus(Focus focus);


}
