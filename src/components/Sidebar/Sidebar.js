import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu } from './SideBarElements';

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper to='/'>
                <SidebarMenu>
                    <SidebarLink to='/'>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='/projects'>
                        Portfolio
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}   

export default Sidebar;