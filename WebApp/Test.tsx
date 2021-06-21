import * as React from 'react'

type TestProps = {}
type TestState = {
    data: string;
    loading: boolean;
}

export class Test extends React.Component<TestProps, TestState> {

    constructor(props: TestProps) {
        super(props);
        this.state = { data: "", loading: true };
    }

    componentDidMount() {
        //このコンポーネントが画面に組み込まれたらWebAPIを呼び出します。
        this.loadData();
    }

    render() {
        if (this.state.loading) {
            return <p><em>Loading...</em></p>;
        } else {
            return <p>{this.state.data}</p>;
        }
    }

    async loadData() {
        const response = await fetch('api/Echo/627'); //WebAPI Echo を呼び出して結果を受け取ります。
        const data = await response.text();
        this.setState({ data: data, loading: false });
    }
}