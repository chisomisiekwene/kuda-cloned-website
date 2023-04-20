

function Header(){
    return(
        <div className="header-container">
            <div className="header">
                {/* The logo */}
                <div className="kuda-logo"><img src="assets/kuda.png"></img></div>

            {/* The navigation bar */}
                <ul className="nav">
                    <li className="navlist" data-toggle="dropdown">
                        <p className="nav-menu">
                            Personal
                            <span className="dropDown"><svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></span>
                        </p>
                    
                        <div className="dropdown-menu">
                            <ul className="kuda-dropdown-menu">
                                <li>
                                    <a className="menu-link" href="/en-ng/cards/">
                                        <span className="menu-link-icon">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><rect x="9.99951" y="12.8003" width="17" height="12" rx="1.5" fill="#40196D" stroke="#DFE3FF"></rect><path d="M26.5 15H10.5V17H26.5V15Z" fill="white"></path></svg>
                                        </span> 
                                            Kuda Card
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link" href="/en-ng/investments/">
                                        <span className="menu-link-icon">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><path d="M11.5007 21.6667L11.9173 21.725L15.7257 17.9167C15.6492 17.6368 15.6491 17.3416 15.7253 17.0618C15.8015 16.7819 15.9513 16.5275 16.159 16.325C16.809 15.6667 17.859 15.6667 18.509 16.325C18.9507 16.7583 19.0923 17.375 18.9423 17.9167L21.084 20.0583L21.5007 20C21.6507 20 21.7923 20 21.9173 20.0583L24.8923 17.0833C24.834 16.9583 24.834 16.8167 24.834 16.6667C24.834 16.2246 25.0096 15.8007 25.3221 15.4882C25.6347 15.1756 26.0586 15 26.5007 15C26.9427 15 27.3666 15.1756 27.6792 15.4882C27.9917 15.8007 28.1673 16.2246 28.1673 16.6667C28.1673 17.1087 27.9917 17.5326 27.6792 17.8452C27.3666 18.1577 26.9427 18.3333 26.5007 18.3333C26.3507 18.3333 26.209 18.3333 26.084 18.275L23.109 21.25C23.1673 21.375 23.1673 21.5167 23.1673 21.6667C23.1673 22.1087 22.9917 22.5326 22.6792 22.8452C22.3666 23.1577 21.9427 23.3333 21.5007 23.3333C21.0586 23.3333 20.6347 23.1577 20.3221 22.8452C20.0096 22.5326 19.834 22.1087 19.834 21.6667L19.8923 21.25L17.7507 19.1083C17.484 19.1667 17.184 19.1667 16.9173 19.1083L13.109 22.9167L13.1673 23.3333C13.1673 23.7754 12.9917 24.1993 12.6792 24.5118C12.3666 24.8244 11.9427 25 11.5007 25C11.0586 25 10.6347 24.8244 10.3221 24.5118C10.0096 24.1993 9.83398 23.7754 9.83398 23.3333C9.83398 22.8913 10.0096 22.4674 10.3221 22.1548C10.6347 21.8423 11.0586 21.6667 11.5007 21.6667Z" fill="#40196D"></path></svg></span>Investments</a></li><li><a className="menu-link" href="/en-ng/spend/"><span className="menu-link--icon"><svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><path d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z" fill="white"></path><path d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z" fill="#40196D"></path></svg>
                                        </span>
                                            Spend
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link" href="/en-ng/save/">
                                        <span className="menu-link-icon">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none">
                                                <circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle>
                                                <circle cx="17.1547" cy="13.1869" r="3.18693" fill="white"></circle>
                                                <path d="M25.183 18.097H24.7104C24.3784 17.0684 23.6927 16.057 22.9213 15.3056V12.9612C22.9213 12.8905 22.8469 12.8328 22.7761 12.8328C22.0923 12.8328 21.4759 13.1603 21.0895 13.6656C20.9829 15.6242 19.3516 17.1849 17.367 17.1849C16.1847 17.1849 15.1278 16.6302 14.4451 15.7685C14.1859 16.0488 13.9513 16.3531 13.748 16.6783C13.7406 16.6876 13.732 16.6957 13.7252 16.7054C13.6116 16.8734 13.4231 16.9734 13.2213 16.9734C12.8864 16.9734 12.614 16.7012 12.614 16.3664C12.614 16.1063 12.7795 15.8751 13.0257 15.7915C13.2274 15.723 13.3353 15.5042 13.2668 15.3023C13.1986 15.1009 12.9798 14.9929 12.7779 15.0614C12.2189 15.2512 11.843 15.7757 11.843 16.3662C11.843 17.1254 12.4598 17.7427 13.2184 17.7442C12.9656 18.4114 12.8053 19.1338 12.8053 19.8885C12.8053 21.7882 13.6636 23.5974 15.2065 24.742V26.164C15.2065 26.5992 15.6028 26.969 16.038 26.969H16.5887C17.024 26.969 17.3924 26.5992 17.3924 26.164V25.7688C18.421 26.0272 19.4496 26.0272 20.3497 25.7688V26.164C20.3497 26.5992 20.7787 26.969 21.2139 26.969H21.7644C22.1995 26.969 22.5355 26.5992 22.5355 26.164V24.742C23.5641 23.9714 24.3381 22.8545 24.7104 21.6973H25.183C25.6181 21.6973 26.0072 21.3101 26.0072 20.875V18.9022C26.0072 18.4668 25.6181 18.097 25.183 18.097ZM21.4121 18.8564C20.9527 18.8564 20.5802 18.4841 20.5802 18.0245C20.5802 17.5651 20.9526 17.1924 21.4121 17.1924C21.8717 17.1924 22.2443 17.565 22.2443 18.0245C22.2442 18.4842 21.8715 18.8564 21.4121 18.8564Z" fill="#40196D"></path>
                                            </svg>
                                        </span>
                                            Save
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link" href="/en-ng/budget/">
                                        <span className="menu-link-icon">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><g clip-path="url(#clip0_NEW_ICON_COPY)"><path d="M17.9643 11.0671C17.9643 11.3856 17.9643 11.6537 17.9643 11.9386C17.9643 14.1509 17.9643 16.38 17.9643 18.5923C17.9643 18.9107 18.0647 19.0951 18.3493 19.2459C20.2913 20.4023 22.2165 21.5755 24.1418 22.7487C24.2589 22.8157 24.3761 22.8995 24.4766 22.9666C22.6183 25.5811 18.8851 26.8549 15.4699 25.38C12.1886 23.9554 10.3639 20.3018 11.2009 16.7319C12.0714 13.0951 15.3694 11.1007 17.9643 11.0671Z" fill="#40196D"></path><path d="M18.6844 11C21.5806 11.1844 23.7737 12.4916 25.1129 15.0391C26.4187 17.5028 26.2513 20 24.8786 22.4469C23.4388 21.5754 22.0158 20.7207 20.5928 19.8492C20.0236 19.4972 19.4377 19.162 18.8853 18.7933C18.7681 18.7095 18.6509 18.5419 18.6341 18.4078C18.6174 15.9944 18.6174 13.581 18.6341 11.1676C18.6341 11.1508 18.6509 11.1006 18.6844 11Z" fill="white"></path></g><defs><clipPath id="clip0_NEW_ICON_COPY"><rect x="11" y="11" width="15" height="15" fill="white"></rect></clipPath></defs></svg>
                                        </span>
                                            Budget
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link" href="/en-ng/borrow/">
                                        <span className="menu-link-icon">
                                            <svg width="37" height="38" viewBox="0 0 25 25" fill="none">
                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#DFE3FF"></circle>
                                                    <path d="M10.9929 9.58548C10.8072 9.58548 10.6568 9.73587 10.6568 9.9215C10.6568 10.1071 10.8072 10.2572 10.9929 10.2572H14.0258C14.2114
                                                     10.2572 14.3616 10.1071 14.3616 9.9215C14.3616 9.73587 14.2114 9.58548 14.0258 9.58548H10.9929ZM13.973 10.5446H11.0738C10.6378 
                                                     11.4754 8.27963 12.6306 8.30043 15.3588C8.31796 17.6262 10.0106 18 12.5167 18C12.5189 18 12.5212 18 12.5234 18C12.5258 18 12.5279 
                                                     18 12.5303 18C15.0362 18 16.7289 17.6262 16.7464 15.3588C16.7672 12.6306 14.4092 11.4754 13.973 10.5446ZM12.6841 11.9608V12.2221C12.8563 
                                                     12.2401 13.0047 12.2755 13.1274 12.3283C13.2511 12.3819 13.3582 12.4618 13.4505 12.5698C13.523 12.6521 13.5791 12.737 13.6186 12.8236C13.6581
                                                     12.9109 13.6779 12.99 13.6779 13.0625C13.6779 13.1433 13.6482 13.2133 13.5897 13.2719C13.5304 13.3303 13.4594 13.36 13.3756 13.36C13.2173 13.36
                                                     13.1143 13.2743 13.0681 13.1038C13.0146 12.9027 12.8868 12.7684 12.6841 12.7024V13.7069C12.8835 13.7614 13.0433 13.8116 13.1612 13.8569C13.2798 
                                                     13.9015 13.3862 13.9666 13.4794 14.0522C13.5791 14.1404 13.6564 14.2468 13.7109 14.3695C13.7644 14.493 13.7917 14.6275 13.7917 14.7741C13.7917
                                                     14.9578 13.7487 15.1292 13.6623 15.2892C13.5756 15.4499 13.4488 15.58 13.2816 15.6823C13.1135 15.7835 12.9148 15.8436 12.6841 15.8626V16.2199C12.6841 
                                                     16.3146 12.6747 16.3837 12.6561 16.4275C12.6375 16.471 12.5975 16.4927 12.5341 16.4927C12.4765 16.4927 12.4358 16.4755 12.4122 16.4399C12.3888 16.4046 
                                                     12.3777 16.3493 12.3777 16.2751V15.8675C12.1896 15.8469 12.0248 15.8026 11.884 15.7348C11.7431 15.6673 11.6252 15.5833 11.5313 15.4827C11.4373 15.3815 
                                                     11.3672 15.2768 11.3229 15.1689C11.2775 15.0601 11.2551 14.953 11.2551 14.8481C11.2551 14.7717 11.2849 14.7015 11.3459 14.6398C11.4061 14.578 11.481 
                                                     14.5467 11.5709 14.5467C11.6432 14.5467 11.7043 14.5632 11.7546 14.5969C11.8039 14.6307 11.8387 14.6785 11.8584 14.7395C11.9012 14.8713 11.9392 14.9726
                                                     11.9713 15.0427C12.0043 15.1128 12.0528 15.1771 12.118 15.2347C12.1831 15.2924 12.2696 15.337 12.3777 15.3674V14.245C12.1616 14.1849 11.982 14.119 
                                                     11.8369 14.0457C11.6919 13.9723 11.5741 13.8685 11.4843 13.7334C11.3945 13.5983 11.3492 13.4243 11.3492 13.2117C11.3492 12.9348 11.4373 12.7074 
                                                     11.6137 12.5311C11.79 12.3539 12.0446 12.2508 12.3777 12.2221V11.9658C12.3777 11.8305 12.4287 11.763 12.5299 11.763C12.6331 11.763 12.6841 11.829
                                                     12.6841 11.9608ZM12.3777 13.6172V12.6927C12.2424 12.7329 12.1369 12.7856 12.0611 12.8516C11.9853 12.9175 11.9475 13.018 11.9475 13.1516C11.9475 
                                                     13.2784 11.9829 13.3748 12.0537 13.44C12.1247 13.5051 12.2326 13.5644 12.3777 13.6172ZM12.6841 14.3341V15.3921C12.8464 15.36 12.9717 15.2948 13.0607 
                                                     15.1969C13.1489 15.0979 13.1934 14.9843 13.1934 14.8531C13.1934 14.7131 13.1506 14.6051 13.064 14.5285C12.9782 14.4518 12.8514 14.3868 12.6841 
                                                     14.3341ZM11.131 9.37459H13.9517C14.3721 7.9561 15.0428 8.07195 14.5039 7.56113C13.9653 7.05015 12.1422 6.70485 10.947 7.35798C9.75192 8.01093 10.7106 
                                                     7.9561 11.131 9.37459Z" fill="#40196D"></path>
                                                    <rect x="10.5002" y="9.50732" width="3.96" height="0.88" rx="0.44" fill="white"></rect>
                                                    <rect x="10.8342" y="11.761" width="3.32552" height="5.17304" fill="#40196D"></rect>
                                            </svg>
                                        </span>
                                            Borrow
                                    </a>
                                </li>
                            </ul>
                            </div>
                    </li>

                    <li className="navlist" data-toggle="dropdown">
                        <p className="nav-menu">
                            Business
                            <span className="dropDown"><svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></span>
                        </p>
                        <div className="dropdown-menu">
                            <ul className="kuda-dropdown-menu">
                                <li>
                                    <a rel="noopener noreferrer" className="menu-link" href="/en-ng/business/">
                                        <span class="menu-link--icon">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#DBDCE0"></circle>
                                                    <path d="M14.5936 9.35369L14.2617 9.72763L15.0936 10.4661V9.35369H14.5936ZM15.7044 10.3397H15.2044V10.5644L15.3725 10.7136L15.7044 10.3397ZM16.5841 11.1205L16.2521 
                                                        11.4944H16.2521L16.5841 11.1205ZM15.7044 11.6528V11.1528H15.2044V11.6528H15.7044ZM8.29892 11.6528H8.79892V11.1528H8.29892V11.6528ZM7.41578 11.1205L7.74769 11.4944L7.41578 
                                                        11.1205ZM11.6988 7.31872L12.0307 7.69265L11.6988 7.31872ZM12.301 7.31872L11.9691 7.69265V7.69265L12.301 7.31872ZM15.0936 9.35369V9.28819H14.0936V9.35369H15.0936ZM15.0936 9.28819C15.0936 9.25421 15.1188 9.23126 15.149 9.23126V8.23126C14.5615 8.23126 14.0936 8.70701 14.0936 9.28819H15.0936ZM15.149 9.23126C15.1802 9.23126 15.2044 9.25417 15.2044 9.28819H16.2044C16.2044 8.70078 15.7314 8.23126 15.149 8.23126V9.23126ZM15.2044 9.28819V10.3397H16.2044V9.28819H15.2044ZM15.3725 10.7136L16.2521 11.4944L16.916 10.7465L16.0364 9.96576L15.3725 10.7136ZM16.2521 11.4944C16.3062 11.5424 16.3133 11.5628 16.3065 11.5489C16.2988 11.5333 16.2613 11.4437 16.3058 11.3235C16.3507 11.202 16.4392 11.1572 16.4585 11.1492C16.475 11.1423 16.4584 11.1528 16.3875 11.1528V12.1528C16.5362 12.1528 16.6954 12.1335 16.8418 12.0728C16.9909 12.0109 17.1632 11.8881 17.2437 11.6703C17.3238 11.4537 17.2738 11.2494 17.2033 11.1064C17.1336 10.9652 17.0275 10.8456 16.916 10.7465L16.2521 11.4944ZM16.3875 11.1528H15.7044V12.1528H16.3875V11.1528ZM15.2044 11.6528V16.0003H16.2044V11.6528H15.2044ZM15.2044 16.0003C15.2044 15.9696 15.2176 15.9443 15.2332 15.9288C15.2482 15.9139 15.2733 15.9002 15.3063 15.9002V16.9002C15.7957 16.9002 16.2044 16.4992 16.2044 16.0003H15.2044ZM15.3063 15.9002H8.69708V16.9002H15.3063V15.9002ZM8.69708 15.9002C8.75489 15.9002 8.79892 15.9472 8.79892 16.0003H7.79892C7.79892 16.4963 8.19948 16.9002 8.69708 16.9002V15.9002ZM8.79892 16.0003V11.6528H7.79892V16.0003H8.79892ZM8.29892 11.1528H7.61238V12.1528H8.29892V11.1528ZM7.61238 11.1528C7.54114 11.1528 7.52429 11.1423 7.54062 11.1491C7.55963 11.1569 7.64841 11.2017 7.69353 11.3234C7.73824 11.4441 7.70052 11.534 7.69287 11.5495C7.68608 11.5632 7.69334 11.5427 7.74769 11.4944L7.08386 10.7465C6.97225 10.8456 6.86612 10.9653 6.79636 11.1064C6.72574 11.2494 6.67545 11.4539 6.75583 11.6709C6.83661 11.8889 7.0093 12.0114 7.15827 12.0731C7.30456 12.1336 7.46372 12.1528 7.61238 12.1528V11.1528ZM7.74769 11.4944L12.0307 7.69265L11.3669 6.94478L7.08386 10.7465L7.74769 11.4944ZM12.0307 7.69265C12.0144 7.70718 12.0019 7.70752 12.0001 7.70752C11.998 7.70752 11.9853 7.70704 11.9691 7.69265L12.633 6.94478C12.2748 6.6269 11.7216 6.62997 11.3669 6.94478L12.0307 7.69265ZM11.9691 7.69265L14.2617 9.72763L14.9255 8.97975L12.633 6.94478L11.9691 7.69265Z" fill="black">
                                                    </path>
                                                    <rect x="13.2002" y="12.4004" width="1.6" height="3.2" fill="white"></rect>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.48332 11.1073L12.0281 7.2002L13.779 8.44591L14.5129 9.18176L14.8239 8.92776L15.1629 8.72979L15.6714 8.86987L15.7832 
                                                        9.6356L15.9248 10.3434L16.8002 11.1913V11.563H16.3196L15.8968 11.6433L15.7553 12.4034V14.8743V16.2022L15.4721 16.4002H12.9315H9.96807H8.61207L8.30101 16.0659V15.1844L8.32895 
                                                        13.5987L8.38669 11.8151L8.07563 11.6433L7.2002 11.535L7.48332 11.1073ZM14.8002 12.4002H13.2002V15.6002H14.8002V12.4002Z" fill="black">
                                                    </path>
                                            </svg>
                                        </span>
                                        Discover Business
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link" href="/en-ng/business/registration-cac-tin/">
                                        <span className="menu-link--icon">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><circle cx="12.5" cy="12.5" r="12.5" fill="#DBDCE0"></circle><path d="M16.6681 16.4763V7H8V18H15.277V16.4763H16.6681Z" fill="black"></path><path d="M16.6685 16.4766H15.2773V17.9997H16.6685V16.4766Z" fill="#121212"></path><path d="M15.278 8.31348H9.3916V8.76629H15.278V8.31348Z" fill="white"></path><path d="M15.278 9.32764H9.3916V9.78045H15.278V9.32764Z" fill="white"></path><path d="M15.278 10.3423H9.3916V10.7951H15.278V10.3423Z" fill="white"></path><path d="M15.278 11.355H9.3916V11.8078H15.278V11.355Z" fill="white"></path><path d="M12.1353 12.3696H9.3916V12.8224H12.1353V12.3696Z" fill="white"></path></svg>
                                        </span>
                                        Business Registration
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" class="menu-link" href="/en-ng/business/softpos-payments/">
                                        <span class="menu-link--icon">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <circle cx="12.5" cy="12.5" r="12.5" fill="#DBDCE0"></circle>
                                                <path d="M15.6069 12.5258H10.4046C10.2611 12.5258 10.1445 12.4158 10.1445 12.2802V9.82422C10.1445 9.68867 10.2611 9.57861 10.4046 9.57861H15.6069C15.7505 9.57861 15.867 9.68867 15.867 9.82422V12.2802C15.867 12.4158 15.7505 12.5258 15.6069 12.5258ZM10.6647 12.0346H15.3469V9.82422H13.0058L10.6647 9.74235V12.0346Z" fill="white"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9829 16.9999H10.0174C9.69285 16.9999 9.42871 16.7624 9.42871 16.4705V8.6346C9.42871 8.34269 9.69285 8.10513 10.0174 
                                                8.10513L10.8865 8.10522C11.0002 8.10522 11.0925 8.18825 11.0925 8.29053V9.05442H10.9397C10.826 9.05442 10.7337 9.13746 10.7337 9.23973C10.7337 9.342 10.826 9.42504 10.9397 
                                                9.42504H15.0606C15.1743 9.42504 15.2666 9.342 15.2666 9.23973C15.2666 9.13746 15.1743 9.05442 15.0606 9.05442H11.2777L14.9178 9.05234V8.28834C14.9178 8.18606 15.0101 8.10303
                                                15.1238 8.10303L15.9829 8.10513C16.3074 8.10513 16.5716 8.34269 16.5716 8.6346V16.4705C16.5716 16.7624 16.3075 16.9999 15.9829 16.9999ZM15.33 8.47355L15.3342 8.47357H15.33V8.47355ZM13.2074 
                                                13.2532H12.7002C12.5953 13.2532 12.51 13.1701 12.51 13.0679C12.51 12.9656 12.5953 12.8826 12.7002 12.8826H13.2074C13.3124 12.8826 13.3976 12.9656 13.3976 13.0679C13.3976 13.1701 13.3124 
                                                13.2532 13.2074 13.2532ZM14.3509 13.2532H14.8581C14.9631 13.2532 15.0483 13.1701 15.0483 13.0679C15.0483 12.9656 14.9631 12.8826 14.8581 12.8826H14.3509C14.246 12.8826 14.1607 12.9656 
                                                14.1607 13.0679C14.1607 13.1701 14.246 13.2532 14.3509 13.2532ZM11.5567 14.3703H11.0495C10.9445 14.3703 10.8593 14.2873 10.8593 14.185C10.8593 14.0827 10.9445 13.9997 11.0495 
                                                13.9997H11.5567C11.6616 13.9997 11.7469 14.0827 11.7469 14.185C11.7469 14.2873 11.6616 14.3703 11.5567 14.3703ZM11.0495 13.2651H11.5567C11.6616 13.2651 11.7469 13.1821 11.7469 
                                                13.0798C11.7469 12.9775 11.6616 12.8945 11.5567 12.8945H11.0495C10.9445 12.8945 10.8593 12.9775 10.8593 13.0798C10.8593 13.1821 10.9445 13.2651 11.0495 13.2651ZM13.2074 
                                                14.3703H12.7002C12.5953 14.3703 12.51 14.2873 12.51 14.185C12.51 14.0827 12.5953 13.9997 12.7002 13.9997H13.2074C13.3124 13.9997 13.3976 14.0827 13.3976 14.185C13.3976 14.2873 
                                                13.3124 14.3703 13.2074 14.3703ZM14.3509 14.3703H14.8581C14.9631 14.3703 15.0483 14.2873 15.0483 14.185C15.0483 14.0827 14.9631 13.9997 14.8581 13.9997H14.3509C14.246 13.9997 14.1607 
                                                14.0827 14.1607 14.185C14.1607 14.2873 14.246 14.3703 14.3509 14.3703ZM11.5567 15.4755H11.0495C10.9445 15.4755 10.8593 15.3925 10.8593 15.2902C10.8593 15.1879 10.9445 15.1049 11.0495 
                                                15.1049H11.5567C11.6616 15.1049 11.7469 15.1879 11.7469 15.2902C11.7469 15.3925 11.6616 15.4755 11.5567 15.4755ZM12.7002 15.4755H13.2074C13.3124 15.4755 13.3976 15.3925 13.3976 
                                                15.2902C13.3976 15.1879 13.3124 15.1049 13.2074 15.1049H12.7002C12.5953 15.1049 12.51 15.1879 12.51 15.2902C12.51 15.3925 12.5953 15.4755 12.7002 15.4755ZM14.8581 15.4755H14.3509C14.246 
                                                15.4755 14.1607 15.3925 14.1607 15.2902C14.1607 15.1879 14.246 15.1049 14.3509 15.1049H14.8581C14.9631 15.1049 15.0483 15.1879 15.0483 15.2902C15.0483 15.3925 14.9631 15.4755 14.8581 
                                                15.4755ZM11.3593 9.94723C11.0832 9.94723 10.8593 10.1711 10.8593 10.4472V11.2893C10.8593 11.5654 11.0832 11.7893 11.3593 11.7893H14.6512C14.9273 11.7893 15.1512 11.5654 15.1512 
                                                11.2893V10.4472C15.1512 10.1711 14.9273 9.94723 14.6512 9.94723H11.3593Z" fill="black"></path>
                                                <rect x="14.7939" y="7" width="2.21042" height="3.57655" rx="0.5" transform="rotate(90 14.7939 7)" fill="black"></rect>
                                            </svg>
                                        </span>
                                            SoftPOS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="navlist" data-toggle="dropdown">
                        <p className="nav-menu">
                            Company
                            <span className="dropDown"><svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></span>
                        </p>
                        <div className="dropdown-menu">
                            <ul className="kuda-dropdown-menu">
                                <li><a href="#" className="menu-link">Blog</a></li>
                                <li><a href="#" className="menu-link">Press</a></li>
                                <li><a href="#" className="menu-link">Join our team</a></li>
                                <li><a href="#" className="menu-link">About us</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="navlist" data-toggle="dropdown">Developers</li>
                    <li className="navlist" data-toggle="dropdown" >
                        <p className="nav-menu">
                            Help
                            <span className="dropDown"><svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></span>
                        </p>
                        <div className="dropdown-menu">
                            <ul className="kuda-dropdown-menu">
                                <li><a href="#" className="menu-link">Get Help</a></li>
                                <li><a href="#" className="menu-link">Scam Awareness</a></li>
                                <li><a href="#" className="menu-link">FAQs</a></li>
                                <li><a href="#" className="menu-link">Security</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            {/* end of navigation bar */}

            <div className="join">
                <a href="https://app.kuda.com/" target="_blank" rel="noopener noreferrer" className="sign-in">Sign In</a>
                <div><a href="https://kuda.com/joinKuda/" className="register">Join Kuda</a></div>
            </div>

            <div className="location" data-toggle="dropdown">
                <div className="flag">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle opacity="0.3" cx="15" cy="15" r="15" fill="#008751"></circle>
                    <mask id="mask0_37774_3385_bc" maskUnits="userSpaceOnUse" x="6" y="7" width="18" height="16" style={{maskType:"alpha"}}>
                        <rect x="6.91406" y="7.29712" width="16.1724" height="15.4023" rx="3" fill="#E94D1E"></rect>
                    </mask>
                    <g mask="url(#mask0_37774_3385_bc)">
                        <g clip-path="url(#clip0_37774_3385_bc)">
                            <path d="M0.324219 4.1355H29.5134V26.0274H0.324219V4.1355Z" fill="#008751"></path>
                            <path d="M11.1875 4.05444H19.2956V25.9463H11.1875V4.05444Z" fill="white"></path>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_37774_3385_bc">
                            <rect width="29.1892" height="21.8919" fill="white" transform="translate(0.324219 4.1355)"></rect>
                        </clipPath>
                    </defs>
                </svg>
                </div>
            </div>            

            </div>
        
           
        </div>
       
    )
    
}

export default Header;