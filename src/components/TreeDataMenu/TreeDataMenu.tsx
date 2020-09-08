import React, {memo, useEffect, useState} from 'react'
import classes from "./TreeDataMenu.module.scss";
import 'antd/dist/antd.css';
import {Switch, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getTreeDataThunk} from "../../redux/reducer";
import {TreeDataType} from "../../utils/Types/treeDataTypes";

export const TreeDataMenu = memo(() => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTreeDataThunk());
    }, [])

    const {Reducer: {treeData}} = useSelector((state: AppStateType) => state);


    const {SubMenu} = Menu;

    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');

    const changeTheme = (value: boolean) => {
        value ? setTheme('dark') : setTheme('light');
    };

    const handleClick = (e: any) => {
        console.log(e.key)
        setCurrent(e.key);
    };

    const buildTreeData = (treeItem: TreeDataType) => (
        //Формируем html дерево с помощью библиотеки AntDesign
        treeItem.map((item, index) => (
            item.children?.length !== 0 ?
                <SubMenu key={`${item.id}`} title={item.title}>
                    {buildTreeData(item.children as TreeDataType)}
                </SubMenu>
                : <Menu.Item key={`${item.id}${index}`}>{item.title}</Menu.Item>
        )));

    return (
        <div className={classes.TreeDataMenu}>
            <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
                className={classes.Switch}
            />
            <Menu
                theme={'dark'}
                onClick={handleClick}
                selectedKeys={[current]}
                defaultOpenKeys={['52']}
                mode="inline"
                className={classes.Menu}
            >
                {treeData.length !== 0 && buildTreeData(treeData)}
            </Menu>

        </div>
    )
});