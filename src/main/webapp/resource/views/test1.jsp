<%--
  Created by IntelliJ IDEA.
  User: lanou
  Date: 2017/12/13
  Time: 下午1:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"
    +request.getServerName()+":"
    +request.getServerPort()+path+"/";
%>
<body>

    <form action="<%=basePath%>user/upload.do" method="post" enctype="multipart/form-data">
        <input type="file" name="myFile">
        <input type="submit" value="上传">
    </form>

</body>
</html>
