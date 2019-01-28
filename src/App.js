import React, { Component } from 'react';
import memoryImage from './memoryImage.json'
import Wrapper from './components/Wrapper'
import NavBar from './components/NavBar'
import Title from './components/Title'
import MemoryCard from './components/MemoryCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        memoryImage: memoryImage,
        unselectedImage: memoryImage
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    componentDidMount() {
        this.shuffleArray(memoryImage);
    }

    
    selectImage = id => {
        const findImage = this.state.unselectedImage.find(item => item.id === id);
        // console.log(this.state.unselectedImage.id);
        // console.log(id);
        this.shuffleArray(memoryImage);
        
        if (findImage === undefined) {
            // failure to select a new image
            this.setState({
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                memoryImage: memoryImage,
                unselectedImage: memoryImage
            });
        }
        else {
            // success to select a new image
            const newImage = this.state.unselectedImage.filter(item => item.id !== id);

            this.setState({
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                memoryImage: memoryImage,
                unselectedImage: newImage
            });
            if (this.state.curScore == 16) {
                this.setState({
                    message: "You WIN!",
                    topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                    curScore: 0,
                    memoryImage: memoryImage,
                    unselectedImage: memoryImage
                });
            }
        }

        this.shuffleArray(memoryImage);
    };

    render() {
        return (
            <div>
                <NavBar
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                <Wrapper>
                    {
                        this.state.memoryImage.map(data => (
                            <MemoryCard
                                id={data.id}
                                key={data.id}
                                image={data.image}
                                selectImage={this.selectImage}
                                curScore={this.state.curScore}
                            />
                        ))
                    }
                </Wrapper>
            </div>
        );
    }
}

export default App;

