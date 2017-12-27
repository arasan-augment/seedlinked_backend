<?php

function getMenuList($parent) {
    $getUserDetail = "SELECT name, router_link
                            FROM " . $parent->prefix . "user_role_menus";
    $userResult = $parent->db->query($getUserDetail);

    $i = 0;
    $newArray = array();
    if (!empty($userResult)) {
        foreach ($userResult as $row) {
            $newArray[$i]['name'] = $row['name'];
            $newArray[$i]['value'] = $row['router_link'];
            $newArray[$i]['checked'] = ($i==0) ? TRUE : FALSE;            
            $i++;
        }
        $arrResult = $userResult->fetchAll(PDO::FETCH_OBJ);
    }

    $parent->response(array('response' => 'success', 'items' => $newArray), 200);
}

?>