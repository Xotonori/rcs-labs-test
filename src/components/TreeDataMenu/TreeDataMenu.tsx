import React, {FC, memo, useState} from 'react'
import classes from "./TreeDataMenu.module.scss";
import 'antd/dist/antd.css';
import {Switch, Menu} from "antd";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {TreeDataType} from "../../utils/Types/treeDataTypes";

export const TreeDataMenu: FC = memo(() => {

    const {Reducer: {treeData}} = useSelector((state: AppStateType) => state);
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');
    const {SubMenu} = Menu;

    const changeTheme = (value: boolean) => {
        value ? setTheme('dark') : setTheme('light');
    };

    const handleClick = (e: any) => {
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
                theme={theme as ("dark" | "light")}
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