

const Footer = () => {
    return (

        <footer className="bg-brand2 p-28 relative | font-nunito ">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
                <div>
                    <div className='logo pb-2' >
                        <svg width="133" height="33" viewBox="0 0 133 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_35_26)">
                                <path d="M15.5488 30.0433H1.52584C1.12384 30.0424 0.738564 29.8823 0.454301 29.598C0.170037 29.3137 0.00991919 28.9285 0.00897217 28.5265V9.90805H15.5488C17.2241 9.91278 18.8294 10.5804 20.014 11.765C21.1986 12.9496 21.8662 14.5549 21.8709 16.2301V23.7213C21.8667 25.3967 21.1992 27.0022 20.0145 28.1869C18.8298 29.3716 17.2242 30.0391 15.5488 30.0433Z" fill="#2E3192" />
                                <path d="M11.599 15.0271H1.13866C0.838275 15.0266 0.550325 14.907 0.337917 14.6946C0.125509 14.4822 0.00596734 14.1943 0.00549316 13.8939V0H11.6044C12.8546 0.00378576 14.0526 0.502254 14.9365 1.3865C15.8204 2.27074 16.3184 3.46888 16.3217 4.71915V10.3097C16.3179 11.5606 15.819 12.7591 14.9339 13.6431C14.0489 14.5271 12.8499 15.0247 11.599 15.0271Z" fill="#2E3192" />
                                <path d="M16.3234 21.7597V30.072H5.55646V21.7597C5.55882 20.8641 5.91567 20.0058 6.54899 19.3725C7.18231 18.7392 8.0406 18.3823 8.93625 18.3799H12.9436C13.8392 18.3823 14.6975 18.7392 15.3308 19.3725C15.9642 20.0058 16.321 20.8641 16.3234 21.7597Z" fill="white" />
                                <path d="M11.5989 24.1014C11.6521 24.2045 11.6797 24.3189 11.6796 24.4349V28.4673C11.6796 28.6637 11.6016 28.852 11.4627 28.9909C11.3238 29.1298 11.1355 29.2078 10.9391 29.2078C10.7427 29.2078 10.5543 29.1298 10.4155 28.9909C10.2766 28.852 10.1986 28.6637 10.1986 28.4673V24.4349C10.1984 24.3189 10.2261 24.2045 10.2793 24.1014C10.0578 23.9588 9.88844 23.7484 9.79652 23.5016C9.7046 23.2548 9.69507 22.9849 9.76935 22.7322C9.84362 22.4796 9.99772 22.2577 10.2086 22.0999C10.4194 21.9421 10.6757 21.8569 10.9391 21.8569C11.2024 21.8569 11.4587 21.9421 11.6696 22.0999C11.8804 22.2577 12.0345 22.4796 12.1088 22.7322C12.1831 22.9849 12.1736 23.2548 12.0816 23.5016C11.9897 23.7484 11.8204 23.9588 11.5989 24.1014Z" fill="#2E3192" />
                                <path d="M30.5059 29.2275V16.8362H27.2893V13.9172H37.3301V16.8362H34.1081V29.2293L30.5059 29.2275Z" fill="#383838" />
                                <path d="M36.4461 29.2275V17.6269H39.79V19.2567H39.8331C40.3913 17.9693 41.3206 17.3263 42.6212 17.3275C42.808 17.3241 42.9947 17.3385 43.1788 17.3705V20.6284C42.8607 20.5694 42.5377 20.5406 42.2142 20.5423C40.6829 20.5423 39.9179 21.2427 39.9191 22.6437V29.2275H36.4461Z" fill="#383838" />
                                <path d="M53.5782 17.6269V29.2275H50.2325V27.8559H50.1894C49.9528 28.365 49.5678 28.7906 49.085 29.0769C48.5775 29.3814 47.9948 29.5374 47.4031 29.527C45.3878 29.527 44.3796 28.4548 44.3784 26.3104V17.6269H47.8532V25.5394C47.8532 26.4251 48.1891 26.868 48.8608 26.868C49.0324 26.8723 49.2026 26.8368 49.3581 26.7643C49.5136 26.6918 49.6503 26.5843 49.7573 26.4502C49.994 26.1723 50.1159 25.7617 50.1159 25.2184V17.6269H53.5782Z" fill="#383838" />
                                <path d="M55.0789 25.5394H58.1664C58.173 25.841 58.209 26.1413 58.274 26.4359C58.3388 26.6858 58.4724 26.9125 58.6595 27.0903C58.768 27.1931 58.8963 27.2726 59.0366 27.3241C59.1768 27.3756 59.3261 27.3979 59.4753 27.3897C59.6436 27.4008 59.8124 27.3769 59.9711 27.3195C60.1297 27.2621 60.2747 27.1725 60.3969 27.0562C60.5038 26.9435 60.5872 26.8106 60.6423 26.6653C60.6974 26.52 60.7231 26.3653 60.7179 26.21C60.7179 25.5669 60.275 25.0947 59.3893 24.7935C58.7019 24.5664 58.1838 24.3841 57.8347 24.2466C57.4432 24.0953 57.0633 23.9155 56.698 23.7087C56.3704 23.5563 56.0798 23.3345 55.8464 23.0586C55.6129 22.7828 55.4422 22.4595 55.3461 22.1112C55.2191 21.6984 55.1586 21.2681 55.1668 20.8364C55.1668 19.6924 55.5493 18.824 56.3143 18.2312C57.0793 17.6383 58.1688 17.3394 59.5829 17.3347C61.0842 17.3347 62.16 17.6418 62.8103 18.2562C63.1287 18.5535 63.3803 18.915 63.5485 19.3169C63.7166 19.7187 63.7975 20.1517 63.7857 20.5871V20.9744H60.6964V20.7593C60.6964 20.2728 60.6073 19.9369 60.4292 19.7516C60.2499 19.5723 59.9594 19.4737 59.5596 19.4737C58.7743 19.4737 58.3816 19.8323 58.3816 20.5495C58.3811 20.7042 58.4213 20.8563 58.4981 20.9906C58.5688 21.1153 58.6597 21.2273 58.7671 21.3223C58.9113 21.4354 59.0699 21.5288 59.2386 21.6002C59.4137 21.6853 59.5932 21.7607 59.7765 21.8261C59.9272 21.8763 60.1441 21.9444 60.431 22.0305C60.7179 22.1166 60.9384 22.1865 61.0944 22.2439C61.8652 22.4847 62.5722 22.8952 63.1635 23.4452C63.6703 23.9448 63.9243 24.7098 63.9255 25.7402C63.9255 26.926 63.543 27.8547 62.778 28.5265C62.013 29.1983 60.9163 29.5342 59.4879 29.5342C57.9567 29.5342 56.8378 29.2485 56.1314 28.6771C55.425 28.1057 55.0711 27.2338 55.0699 26.0611L55.0789 25.5394Z" fill="#383838" />
                                <path d="M65.8853 26.2261V20.0277H64.4509V17.6269H65.8853V14.2202H69.3601V17.6269H70.9738V20.0277H69.3601V25.8818C69.3601 26.2978 69.4372 26.5793 69.595 26.7299C69.7527 26.8805 70.045 26.954 70.4753 26.954C70.6405 26.9509 70.8052 26.9365 70.9684 26.911V29.2276C70.3066 29.3129 69.6401 29.3561 68.9728 29.3567C67.7297 29.3567 66.9043 29.1636 66.4967 28.7775C66.0891 28.3914 65.8853 27.5409 65.8853 26.2261Z" fill="#383838" />
                                <path d="M77.9144 29.2275V13.9172H83.5103C84.8694 13.9172 85.9345 14.2351 86.7055 14.871C87.4764 15.507 87.8625 16.4471 87.8637 17.6914C87.8885 18.5058 87.6598 19.3077 87.2093 19.9865C87.01 20.2856 86.7528 20.5417 86.4528 20.7397C86.1529 20.9377 85.8163 21.0736 85.4629 21.1393V21.1824C85.7853 21.2307 86.1015 21.3137 86.406 21.4298C86.7236 21.5651 87.0197 21.7464 87.2846 21.9677C87.6334 22.2695 87.8901 22.6635 88.0251 23.1045C88.2175 23.7105 88.3077 24.3443 88.2923 24.9799C88.2958 25.4654 88.2276 25.9488 88.0897 26.4143C87.9291 26.8991 87.6865 27.3528 87.3725 27.7555C87.0366 28.2049 86.5148 28.5635 85.8072 28.8313C84.9761 29.1149 84.1014 29.2491 83.2235 29.2275H77.9144ZM81.5165 16.5762V20.0277H82.5027C83.6753 20.0277 84.2616 19.43 84.2616 18.2347C84.2679 17.8106 84.1194 17.3988 83.8439 17.0764C83.5641 16.7489 83.1243 16.5846 82.5242 16.5834L81.5165 16.5762ZM81.5165 22.4303V26.5685H82.6103C83.912 26.5685 84.5622 25.9039 84.561 24.5747C84.561 23.1403 83.9323 22.4231 82.6748 22.4231L81.5165 22.4303Z" fill="#383838" />
                                <path d="M99.2707 17.6269V29.2275H95.9268V27.8559H95.8838C95.646 28.3642 95.2613 28.7895 94.7793 29.0769C94.2713 29.3817 93.6879 29.5376 93.0957 29.527C91.0804 29.527 90.0727 28.4548 90.0727 26.3104V17.6269H93.5457V25.5394C93.5457 26.4251 93.8816 26.868 94.5534 26.868C94.7249 26.8723 94.8951 26.8368 95.0506 26.7643C95.2062 26.6918 95.3428 26.5843 95.4499 26.4502C95.6889 26.1729 95.8085 25.7623 95.8085 25.2184V17.6269H99.2707Z" fill="#383838" />
                                <path d="M107.054 29.2275V27.8129H107.011C106.596 28.9556 105.76 29.527 104.501 29.527C103.314 29.527 102.417 29.0554 101.811 28.1123C101.205 27.1692 100.907 25.6398 100.915 23.524C100.907 22.6854 100.95 21.8472 101.044 21.0138C101.121 20.3556 101.283 19.7102 101.526 19.0936C101.721 18.5506 102.086 18.0848 102.566 17.7649C103.083 17.4556 103.679 17.303 104.28 17.3257C105.51 17.3257 106.376 17.8474 106.877 18.8909H106.925V13.9172H110.4V29.2275H107.054ZM106.99 23.5025C106.99 22.9048 106.979 22.4189 106.957 22.0448C106.935 21.6699 106.885 21.2972 106.808 20.9296C106.763 20.6252 106.628 20.3413 106.421 20.1138C106.328 20.0273 106.218 19.9601 106.099 19.9161C105.98 19.8721 105.853 19.8521 105.726 19.8574C105.464 19.8454 105.206 19.9246 104.996 20.0815C104.782 20.2812 104.639 20.5448 104.589 20.8327C104.504 21.1774 104.45 21.5291 104.427 21.8834C104.406 22.2337 104.395 22.7232 104.395 23.3519C104.395 23.9233 104.406 24.3841 104.427 24.7343C104.452 25.1096 104.506 25.4825 104.589 25.8495C104.64 26.1741 104.785 26.4765 105.007 26.7191C105.105 26.8121 105.222 26.8845 105.349 26.9322C105.476 26.9799 105.611 27.0019 105.747 26.997C106.234 26.997 106.562 26.7185 106.733 26.1615C106.904 25.6045 106.99 24.7182 106.99 23.5025Z" fill="#2E3192" />
                                <path d="M118.183 29.2275V27.8129H118.14C117.727 28.9556 116.89 29.527 115.63 29.527C114.443 29.527 113.55 29.0554 112.949 28.1123C112.349 27.1692 112.051 25.6398 112.053 23.524C112.045 22.6855 112.088 21.8473 112.18 21.0138C112.259 20.3564 112.421 19.7117 112.663 19.0953C112.857 18.5526 113.221 18.0869 113.701 17.7667C114.218 17.4576 114.814 17.305 115.417 17.3274C116.647 17.3274 117.511 17.8492 118.011 18.8927H118.054V13.9172H121.529V29.2275H118.183ZM118.119 23.5025C118.119 22.9048 118.108 22.4189 118.086 22.0448C118.065 21.6698 118.014 21.297 117.936 20.9296C117.891 20.6254 117.757 20.3415 117.55 20.1138C117.457 20.0274 117.347 19.9603 117.228 19.9163C117.109 19.8723 116.982 19.8523 116.855 19.8574C116.593 19.8451 116.335 19.9243 116.125 20.0815C115.911 20.2807 115.768 20.5446 115.718 20.8327C115.633 21.1774 115.579 21.5291 115.556 21.8834C115.535 22.2337 115.524 22.7232 115.524 23.3519C115.524 23.9233 115.535 24.3841 115.556 24.7343C115.581 25.1096 115.635 25.4825 115.718 25.8495C115.768 26.1743 115.913 26.4769 116.136 26.7191C116.234 26.8119 116.35 26.8842 116.477 26.9319C116.604 26.9796 116.739 27.0017 116.874 26.997C117.361 26.997 117.69 26.7185 117.862 26.1615C118.034 25.6045 118.12 24.7182 118.119 23.5025Z" fill="#2E3192" />
                                <path d="M125.988 29.3136L122.703 17.6269H126.305L127.722 25.7527H127.765L129.115 17.6269H132.588L129.479 29.3136C129.08 30.7994 128.597 31.7856 128.032 32.2721C127.467 32.7586 126.51 33.0018 125.163 33.0018H124.369C124.211 33.0018 123.976 32.9874 123.652 32.9588V30.5131C123.934 30.5745 124.222 30.6034 124.511 30.5992C125.338 30.5992 125.83 30.1707 125.988 29.3136Z" fill="#383838" />
                            </g>
                            <defs>
                                <clipPath id="clip0_35_26">
                                    <rect width="132.592" height="33" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra cursus tempus malesuada amet, risus risus nulla in sit.
                        Nulla viverra pulvinar ut diam quam nunc sed. Libero amet elementum tincidunt.
                    </div>
                    <div className="font-bold font-[#282828] text-xl py-2">
                        Connect With Us
                    </div>
                    <div className="social-logos flex flex-row gap-5">
                        <div className="py-1 px-2 bg-[#D6D6D6] rounded-full" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                                <path d="M2.80213 16.9999V9.30237H0.708252V6.53087H2.80213V4.16365C2.80213 2.30347 4.03899 0.595215 6.88897 0.595215C8.04289 0.595215 8.89615 0.702748 8.89615 0.702748L8.82892 3.29086C8.82892 3.29086 7.95872 3.28262 7.00913 3.28262C5.98138 3.28262 5.81672 3.74302 5.81672 4.50717V6.53087H8.91061L8.776 9.30237H5.81672V16.9999H2.80213Z" fill="#282828" />
                            </svg>
                        </div>
                        <div className="py-1 px-2 bg-[#D6D6D6] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                                <path d="M21.155 2.59263C20.3652 2.92597 19.5275 3.14477 18.6696 3.24176C19.5632 2.73156 20.2492 1.92365 20.5723 0.961032C19.7229 1.44123 18.7936 1.77956 17.8245 1.96141C17.0351 1.16024 15.9106 0.659546 14.6659 0.659546C12.2761 0.659546 10.3386 2.50535 10.3386 4.78192C10.3386 5.10507 10.3769 5.41966 10.4506 5.72146C6.85429 5.54949 3.66581 3.90831 1.5315 1.41416C1.1591 2.02302 0.945709 2.73125 0.945709 3.48665C0.945709 4.91692 1.70971 6.17867 2.87075 6.91798C2.18357 6.89748 1.51152 6.72066 0.910694 6.4023C0.910447 6.41956 0.910447 6.43683 0.910447 6.45418C0.910447 8.45155 2.40203 10.1178 4.38153 10.4965C3.74431 10.6616 3.07592 10.6858 2.42741 10.5671C2.97802 12.2049 4.57613 13.3967 6.46962 13.4301C4.98866 14.5357 3.12278 15.1948 1.09549 15.1948C0.746161 15.1948 0.401772 15.1753 0.0632324 15.1372C1.97822 16.3069 4.25275 16.9894 6.69643 16.9894C14.6559 16.9894 19.0083 10.7076 19.0083 5.26001C19.0083 5.08121 19.0042 4.90342 18.9957 4.72666C19.8429 4.14322 20.5741 3.42057 21.155 2.59263Z" fill="#282828" />
                            </svg>
                        </div>
                        <div className="py-1 px-2 bg-[#D6D6D6] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M4.20654 15.9698V5.50072H0.658087V15.9698H4.20654ZM2.43277 4.07049C3.67018 4.07049 4.44041 3.26659 4.44041 2.26198C4.41735 1.23471 3.67023 0.453125 2.45625 0.453125C1.24247 0.453125 0.44873 1.23473 0.44873 2.26198C0.44873 3.26663 1.21877 4.07049 2.40961 4.07049H2.43266H2.43277ZM6.1706 15.9698H9.71905V10.1233C9.71905 9.81045 9.7421 9.49788 9.83581 9.27421C10.0923 8.64906 10.6762 8.00158 11.6564 8.00158C12.9405 8.00158 13.4542 8.96163 13.4542 10.369V15.9697H17.0024V9.96684C17.0024 6.75116 15.2518 5.25494 12.9171 5.25494C11.0028 5.25494 10.1624 6.3042 9.69544 7.01885H9.71913V5.5005H6.17068C6.21724 6.48286 6.17068 15.9696 6.17068 15.9696L6.1706 15.9698Z" fill="#282828" />
                            </svg>
                        </div>
                        <div className="py-1 px-2 bg-[#D6D6D6] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.0411 5.06007C7.37953 5.06007 5.23269 7.17337 5.23269 9.79336C5.23269 12.4134 7.37953 14.5267 10.0411 14.5267C12.7027 14.5267 14.8495 12.4134 14.8495 9.79336C14.8495 7.17337 12.7027 5.06007 10.0411 5.06007ZM10.0411 12.8706C8.32113 12.8706 6.91501 11.4906 6.91501 9.79336C6.91501 8.09613 8.31694 6.71611 10.0411 6.71611C11.7653 6.71611 13.1672 8.09613 13.1672 9.79336C13.1672 11.4906 11.7611 12.8706 10.0411 12.8706ZM16.1678 4.86646C16.1678 5.48026 15.6656 5.97048 15.0462 5.97048C14.4227 5.97048 13.9247 5.47614 13.9247 4.86646C13.9247 4.25677 14.4269 3.76243 15.0462 3.76243C15.6656 3.76243 16.1678 4.25677 16.1678 4.86646ZM19.3525 5.98696C19.2813 4.50806 18.9382 3.19806 17.8375 2.11876C16.7411 1.03945 15.4103 0.701655 13.9079 0.627504C12.3595 0.540995 7.71851 0.540995 6.1701 0.627504C4.67192 0.697535 3.34113 1.03533 2.2405 2.11464C1.13988 3.19394 0.800908 4.50394 0.72558 5.98284C0.637697 7.50705 0.637697 12.0756 0.72558 13.5998C0.796723 15.0787 1.13988 16.3887 2.2405 17.468C3.34113 18.5473 4.66773 18.8851 6.1701 18.9592C7.71851 19.0457 12.3595 19.0457 13.9079 18.9592C15.4103 18.8892 16.7411 18.5514 17.8375 17.468C18.934 16.3887 19.2771 15.0787 19.3525 13.5998C19.4403 12.0756 19.4403 7.51117 19.3525 5.98696ZM17.3521 15.2352C17.0257 16.0426 16.3938 16.6647 15.5693 16.9901C14.3348 17.4721 11.4054 17.3609 10.0411 17.3609C8.67684 17.3609 5.74325 17.468 4.51289 16.9901C3.69266 16.6688 3.06074 16.0467 2.73014 15.2352C2.2405 14.02 2.3535 11.1363 2.3535 9.79336C2.3535 8.45041 2.24469 5.56265 2.73014 4.35152C3.05656 3.5441 3.68847 2.92206 4.51289 2.59662C5.74743 2.11464 8.67684 2.22587 10.0411 2.22587C11.4054 2.22587 14.339 2.11876 15.5693 2.59662C16.3896 2.91794 17.0215 3.53998 17.3521 4.35152C17.8417 5.56677 17.7287 8.45041 17.7287 9.79336C17.7287 11.1363 17.8417 14.0241 17.3521 15.2352Z" fill="#282828" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-semibold text-xl pb-3">Trust Buddy</h4>
                    <div>About Us</div>
                    <div>How To Use</div>
                    <div>Contact support</div>
                    <div>Privacy Policy</div>
                </div>
                <div className="grid">
                    <h4 className="font-semibold text-xl pb-3">  Subscribe to our Newsletter </h4>
                    <div>Get latest exclusive bonus update and promotional materials.</div>
                    <form className="grid gap-3 ">
                        <input type="text" 
                        placeholder="Enter your email address" 
                        className=" bg-transparent border |  rounded-md py-3 pl-4 text-lg text-[#515151] placeholder:text-[#515151] border-[#282828]" />
                        <button className="py-2 px-3 bg-[#2E3192] rounded-md text-white font-semibold text-lg mr-36 ">Subscribe </button>
                    </form>

                </div>
            </div>
            <div className="absolute bottom-4 right-[50%] font-nunito font-normal text-[#282828]">
                © Copyright 2022 Trustbuddy
            </div>
        </footer>

    )
}

export default Footer