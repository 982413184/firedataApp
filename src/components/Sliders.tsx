'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
    Slider,
    Text,
    StyleSheet,
    View,
} from 'react-native';

type SliderProps = any

class SliderExample extends Component<SliderProps> {
    public state: any = {
        value: 0
    }
    constructor(props: SliderProps) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    render() {
        return (
            <View style={styles.text}>
                <Text>
                    {this.state.value && +this.state.value.toFixed(3)}
                </Text>
                <Slider
                    style={styles.slider}
                    {...this.props}
                    onValueChange={(value: number) => this.setState({ value: value })} />
            </View>
        )
    }
}

type SlidingProps = any

class SlidingCompleteExample extends Component<SlidingProps> {
    public state: any = {
        slideCompletionValue: 0,
        slideCompletionCount: 0
    }
    constructor(props: SlidingProps) {
        super(props)
    }

    render() {
        return (
            <View style={styles.view}>
                <SliderExample
                    {...this.props}
                    onSlidingComplete={(value: number) => this.setState({
                        slideCompletionValue: value,
                        slideCompletionCount: this.state.slideCompletionCount + 1
                    })
                    } />
                <Text>
                    Completions: {this.state.slideCompletionCount} value: {this.state.slideCompletionValue}
                </Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    slider: {
        height: 10,
        margin: 10,
    },
    view: {
        height: 300,
        width: 300,
        backgroundColor: 'skyblue'
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
    },
});

export default SlidingCompleteExample;