import React from 'react';
import Npmcode from '../../../components/NPMcode/Npmcode';
import FileName from '../../../components/Text/FileName';
import ButtonVariants from './ButtonVariants';
import ButtonOutLine from './ButtonOutLine';
import ButtonDisabled from './ButtonDisabled';
import ButtonSizes from './ButtonSizes';
import ButtonGroups from './ButtonGroups';

const ButtonMain = () => {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-purple-700 mb-6 tracking-wide">
                Button Component Documentation
            </h1>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purple-600 mb-3 uppercase tracking-wide">
                    Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    The Button component in JKCSS Framework provides a simple, customizable, and utility-first approach to styling buttons for your web application.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-purple-600 mb-3 uppercase tracking-wide">
                    Installation
                </h2>
                <p className="text-gray-700 mb-4">
                    Ensure you have installed JKCSS Framework before using the Button component:{' '}
                    <a
                        href="/GetStarted"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 underline hover:text-purple-800 font-semibold"
                    >
                        Installation Guide
                    </a>
                </p>
                <Npmcode npmcode="npm i @jehankandy/jkcss" />

                <p className="text-gray-700 mt-6 mb-4">Or include it via CDN:</p>
                <Npmcode npmcode="https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css" />
            </section>

            <section className="text-gray-800">
                <h2 className="text-purple-600 uppercase font-semibold text-xl mb-4 tracking-wide">
                    Usage
                </h2>

                <p className="mb-4">
                    Use the <FileName FName=".jkbtn" /> class to create a basic button:
                </p>
                <Npmcode npmcode={`<button class="btn">Click Me</button>`} />

                <SubSection title="Button Variants" className="mb-10">
                    <p className="mb-4">Different styles can be applied using predefined classes:</p>
                    <ButtonVariants />
                </SubSection>

                <SubSection title="Button Outline" className="mb-10">
                    <p className="mb-4">Different styles can be applied using predefined classes:</p>
                    <ButtonOutLine />
                </SubSection>

                <SubSection title="Disabled state All Buttons" className="mb-10">
                    <p className="mb-4">
                        JKCSS supports button status as: <FileName FName="Disabled" />
                    </p>
                    <ButtonDisabled />
                </SubSection>

                <SubSection title="Button Sizes" className="mb-10">
                    <p className="mb-4">
                        JKCSS includes small buttons <FileName FName=".jkbtn-sm" /> and large buttons <FileName FName=".jkbtn-lg" />.
                    </p>
                    <ButtonSizes />
                </SubSection>

                <SubSection title="Button Groups" className="mb-10">
                    <p className="mb-4">
                        This is the button group of JKCSS. <FileName FName=".btn-group" /> is the base class of the button group. You can use any button color style with <FileName FName=".btn-group" /> as shown below.
                    </p>
                    <ButtonGroups />
                    <p className="mt-4 text-gray-700">
                        The <FileName FName=".btn-group" /> class can also be used with outline buttons and more.
                    </p>
                </SubSection>
            </section>
        </div>
    );
};

const SubSection = ({ title, children, className }) => (
    <section className={className}>
        <h3 className="text-purple-600 font-semibold text-xl mb-4 border-b border-purple-300 pb-1 tracking-wide">
            {title}
        </h3>
        {children}
    </section>
);

export default ButtonMain;
