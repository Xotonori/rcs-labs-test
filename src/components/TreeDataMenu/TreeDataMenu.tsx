import React, {FC, memo} from 'react'
import classes from "./TreeDataMenu.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {TreeDataType} from "../../utils/Types/treeDataTypes";
import {UpOutlined} from "@ant-design/icons/lib";

export const TreeDataMenu: FC = memo(() => {

    const {treeData} = useSelector((state: AppStateType) => state.Reducer);

    const onClickMenuItemHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        //Клик по дочерним li
        document.querySelectorAll(`li`).forEach(item => item.classList.remove(classes.activeListItem));
        e.currentTarget.classList.contains(classes.MenuItem) && e.currentTarget.classList.add(classes.activeListItem);
    }

    const onClickSubMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
        //Анимация стрелочек развертывания
        const arrow = e.currentTarget.getElementsByClassName('anticon-up')[0];

        if (arrow.classList.contains(classes.arrowOpen)) {
            arrow.classList.remove(classes.arrowOpen);
            arrow.classList.add(classes.arrowClose);
        } else {
            arrow.classList.remove(classes.arrowClose);
            arrow.classList.add(classes.arrowOpen);
        }

        //Скрытие списков
        e.currentTarget.parentNode.querySelector('ul').classList.toggle(classes.hideMenuItem);
    }

    const buildTreeData = (treeItem: TreeDataType, paddingLeft: number) => (
        //Формируем html дерево
        treeItem.map((item, index) => (
            item.children?.length !== 0 ?
                <li key={item.id} className={classes.wrapSubMenu}>
                    <div className={`${classes.SubMenu} ${item.parent_id === null && classes.MainSubMenu}`}
                         style={{paddingLeft: `${paddingLeft}px`}}
                         onClick={onClickSubMenuHandler}>
                        <span>{item.title}</span>
                        <UpOutlined/>
                    </div>
                    <ul className={`${classes.UnOrderedlist} ${classes.hideMenuItem}`}>
                        {buildTreeData(item.children as TreeDataType, paddingLeft + 30)}
                    </ul>
                </li>
                :
                <li key={`${item.id}${index}`}
                    className={classes.MenuItem}
                    style={{paddingLeft: `${paddingLeft}px`}}
                    onClick={onClickMenuItemHandler}>
                    {item.title}
                </li>
        )));

    return (
        <div className={classes.TreeDataMenu}>
            <ul className={`${classes.Menu}`}>
                {treeData.length !== 0 && buildTreeData(treeData, 20)}
            </ul>
        </div>
    )
});