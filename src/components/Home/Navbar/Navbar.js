import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  text-white">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link  mr-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="mr-2">
                            <a class="nav-link  mr-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-5" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-5 text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  mr-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;