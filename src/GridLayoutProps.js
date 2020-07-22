import React from 'react';
import styled from 'styled-components'
import GuideLayout from './GuideLayout'

const Content = styled.div`
  float:right;
  width: calc(100% - 230px);
`
const Title1 = styled.h1`
margin:0;
padding:0 10px 20px;
font-weight: extra-bold;
`
const Section = styled.section`
`
const SectionList = styled.ol`
margin:0;
`
const SectionListItem = styled.li`
font-size:24px;  
font-weight: bold;
`
const Title2 = styled.h2`
font-size: 24px;
margin:0;
border-bottom: solid 1px #D3D3D3;
`
const CodeText = styled.pre`
background-color: #f3f3f3;
font-size: 12px;
padding: 3px 5px;
overflow: auto;
font-family: monospace;
font-weight:500;
`
const InlineCodeText = styled.span`
background-color: #f3f3f3;
font-size: 12px;
padding: 3px 5px;
overflow: auto;
font-family: monospace;
font-weight:500;
`
const PlainText = styled.p`
margin-block-start: 0.5em;
margin-block-end: 0.5em;
font-size: 15px;
white-space: initial;
font-weight:500;
`

const Marked = styled.span`
${props => props.keyword ? "color: #07a;" : ""}
${props => props.comment ? "color: #690;" : ""}
${props => props.function ? "color: #DD4A68;" : ""}
${props => props.punctuation ? "color: #999;" : ""}
${props => props.warning ? "color: #ffb200;" : ""}
${props => props.danger ? "color:#d73a49" : ""}
`

function QuickStart() {
    return (
        <GuideLayout>
            <Content>
                <Title1>Grid Layout Props</Title1>
                <Section>
                    <SectionList>
                        <SectionListItem>
                            <Title2>Grid Layout Props</Title2>
                            <PlainText>RGL supports the following properties (see the source for the final word on this):</PlainText>
                            <CodeText>
                            <Marked comment>//</Marked><br /><br />
                            <Marked comment>// Basic props</Marked><br /><br />
                                <Marked comment>//</Marked><br /><br/>
                                <Marked comment>// This allows setting the initial width on the server side.</Marked> <br />
                                <Marked comment>// This is required unless using the HOC &lt;WidthProvider&gt; or similar</Marked><br />                             
                                <Marked ><Marked danger>width</Marked>: number,</Marked> <br /> <br/>
                                <Marked comment>// If true, the container height swells and contracts to fit contents</Marked> <br /> 
                                <Marked ><Marked danger>autoSize</Marked>: ?boolean = true,</Marked> <br /> <br/>
                                <Marked comment>// Number of columns in this layout.</Marked> <br /> 
                                <Marked ><Marked danger>cols</Marked>: ?number = 12,</Marked> <br /> 
                                <Marked comment>// A CSS selector for tags that will not be draggable.</Marked> <br /> 
                                <Marked comment>// For example: draggableCancel:'.MyNonDraggableAreaClassName'</Marked> <br /> 
                                <Marked comment>// If you forget the leading . it will not work.</Marked> <br /> 
                                <Marked ><Marked danger>draggableCancel</Marked>: ?string = '',</Marked> <br /> <br/>
                                <Marked comment>// A CSS selector for tags that will act as the draggable handle.</Marked> <br /> 
                                <Marked comment>// For example: draggableHandle:'.MyDragHandleClassName'</Marked> <br /> 
                                <Marked comment>// If you forget the leading . it will not work.</Marked> <br /> 
                                <Marked ><Marked danger>draggableHandle</Marked>: ?string = '',</Marked> <br /> <br/>
                                <Marked comment>// If true, the layout will compact vertically</Marked> <br /> 
                                <Marked ><Marked danger>verticalCompact</Marked>: ?boolean = true,</Marked> <br /> <br/>
                                <Marked comment>// Compaction type.</Marked> <br /> 
                                <Marked ><Marked danger>compactType</Marked>: ?('vertical' | 'horizontal') = 'vertical';</Marked> <br /> 
                                <Marked comment>// Layout is an array of object with the format:</Marked> <br /> 
                                <Marked comment>// &#123;x: number, y: number, w: number, h: number&#125;</Marked> <br /> 
                                <Marked comment>// The index into the layout must match the key used on each item component.</Marked> <br /> 
                                <Marked comment>// If you choose to use custom keys, you can specify that key in the layout</Marked> <br /> 
                                <Marked comment>// array objects like so:</Marked> <br /> 
                                <Marked comment>// &#123;i: string, x: number, y: number, w: number, h: number&#125;</Marked> <br /> 
                                <Marked ><Marked danger>layout</Marked>: ?array = null, // If not provided, use data-grid props on children</Marked> <br /> <br/>
                                <Marked comment>// Margin between items [x, y] in px.</Marked> <br /> 
                                <Marked ><Marked danger>margin</Marked>: ?[number, number] = [10, 10],</Marked> <br /> <br/>
                                <Marked comment>// Padding inside the container [x, y] in px</Marked> <br /> 
                                <Marked ><Marked danger>containerPadding</Marked>: ?[number, number] = margin,</Marked> <br /> <br/>
                                <Marked comment>// Rows have a static height, but you can change this based on breakpoints</Marked> <br /> 
                                <Marked comment>// if you like.</Marked> <br /> 
                                <Marked ><Marked danger>rowHeight</Marked>: ?number = 150,</Marked> <br /> 
                                <Marked comment>// Configuration of a dropping element. Dropping element is a "virtual" element</Marked> <br /> 
                                <Marked comment>// which appears when you drag over some element from outside.</Marked> <br /> 
                                <Marked comment>// It can be changed by passing specific parameters:</Marked> <br /> 
                                <Marked comment>//  i - id of an element</Marked> <br /> 
                                <Marked comment>//  w - width of an element</Marked> <br /> 
                                <Marked comment>//  h - height of an element</Marked> <br /> 
                                <Marked ><Marked danger>droppingItem</Marked>?: &#123; i: string, w: number, h: number &#125;</Marked> <br /> <br /> 
                                <Marked comment>//</Marked> <br /> 
                                <Marked comment>//  Flags</Marked> <br /> 
                                <Marked comment>//</Marked> <br /> 
                                <Marked ><Marked danger>isDraggable</Marked>: ?boolean = true,</Marked> <br /> 
                                <Marked ><Marked danger>isResizable</Marked>: ?boolean = true,</Marked> <br /> 
                                <Marked comment>// Uses CSS3 translate() instead of position top/left.</Marked> <br /> 
                                <Marked comment>// This makes about 6x faster paint performance</Marked> <br /> 
                                <Marked ><Marked danger>useCSSTransforms</Marked>: ?boolean = true,</Marked> <br /> 
                                <Marked comment>// If parent DOM node of ResponsiveReactGridLayout or ReactGridLayout has "transform: scale(n)" css property,</Marked> <br /> 
                                <Marked comment>// we should set scale coefficient to avoid render artefacts while dragging.</Marked> <br /> 
                                <Marked ><Marked danger>transformScale</Marked>: ?number = 1</Marked> <br /> <br/>
                                <Marked comment>// If true, grid items won't change position when being</Marked> <br /> 
                                <Marked comment>// dragged over.</Marked> <br /> 
                                <Marked ><Marked danger>preventCollision</Marked>: ?boolean = false;</Marked> <br /> <br/>
                                <Marked comment>// If true, droppable elements (with `draggable=&#123;true&#125;` attribute)</Marked> <br /> 
                                <Marked comment>// can be dropped on the grid. It triggers "onDrop" callback</Marked> <br /> 
                                <Marked comment>// with position and event object as parameters.</Marked> <br /> 
                                <Marked comment>// It can be useful for dropping an element in a specific position</Marked> <br /> 
                                <Marked comment>//</Marked> <br /> 
                                <Marked comment>// NOTE: In case of using Firefox you should add</Marked> <br /> 
                                <Marked comment>// `onDragStart=&#123;e => e.dataTransfer.setData('text/plain', '')&#125;` attribute</Marked> <br /> 
                                <Marked comment>// along with `draggable=&#123;true&#125;` otherwise this feature will work incorrect.</Marked> <br /> 
                                <Marked comment>// onDragStart attribute is required for Firefox for a dragging initialization</Marked> <br /> 
                                <Marked comment>// @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313</Marked> <br /> 
                                <Marked ><Marked danger>isDroppable</Marked>: ?boolean = false</Marked> <br /> <br/>
                                <Marked comment>//</Marked> <br /> 
                                <Marked comment>// Callbacks</Marked> <br /> 
                                <Marked comment>//</Marked> <br /> <br/>
                                <Marked comment>// Callback so you can save the layout.</Marked> <br /> 
                                <Marked comment>// Calls back with (currentLayout) after every drag or resize stop.</Marked> <br /> 
                                <Marked ><Marked danger>onLayoutChange</Marked>: (layout: Layout) => void,</Marked> <br /> <br/>
                                <Marked comment>//</Marked> <br /> 
                                <Marked comment>// All callbacks below have signature (layout, oldItem, newItem, placeholder, e, element).</Marked> <br /> 
                                <Marked comment>// 'start' and 'stop' callbacks pass `undefined` for 'placeholder'.</Marked> <br /> 
                                <Marked comment>// </Marked> <br /> 
                                <Marked >type ItemCallback = (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,</Marked> <br /> 
                                <Marked >                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) => void;</Marked> <br /> <br/>
                                <Marked comment>// Calls when drag starts.</Marked> <br /> 
                                <Marked ><Marked danger>onDragStart</Marked>: ItemCallback,</Marked> <br /> 
                                <Marked comment>// Calls on each drag movement.</Marked> <br /> 
                                <Marked ><Marked danger>onDrag</Marked>: ItemCallback,</Marked> <br /> 
                                <Marked comment>// Calls when drag is complete.</Marked> <br /> 
                                <Marked ><Marked danger>onDragStop</Marked>: ItemCallback,</Marked> <br /> 
                                <Marked comment>// Calls when resize starts.</Marked> <br /> 
                                <Marked ><Marked danger>onResizeStart</Marked>: ItemCallback,</Marked> <br /> 
                                <Marked comment>// Calls when resize movement happens.</Marked> <br /> 
                                <Marked ><Marked danger>onResize</Marked>: ItemCallback,</Marked> <br /> 
                                <Marked comment>// Calls when resize is complete.</Marked> <br /> 
                                <Marked ><Marked danger>onResizeStop</Marked>: ItemCallback,</Marked> <br /> 
                                <Marked comment>// Calls when some element has been dropped</Marked> <br /> 
                                <Marked ><Marked danger>onDrop</Marked>: (elemParams: &#123; x: number, y: number, w: number, h: number, e: Event &#125;) => void,</Marked> <br /> <br/>
                                <Marked comment>// Ref for getting a reference for the wrapping div.</Marked> <br /> 
                                <Marked ><Marked danger>innerRef</Marked>: ?React.Ref</Marked> <br /> 
                            </CodeText>

                            <PlainText>This allows you to easily replace WidthProvider with your own Provider HOC if you need more sophisticated logic.</PlainText>
                            <PlainText>
                            WidthProvider accepts a single prop, measureBeforeMount. If true, WidthProvider will measure the container's width before mounting children. Use this if you'd like to completely eliminate any resizing animation on application/component mount.
                            </PlainText>
                            <PlainText>
                            Have a more complicated layout? WidthProvider is very simple and only listens to window 'resize' events. If you need more power and flexibility, try the SizeMe React HOC as an alternative to WidthProvider.
                            </PlainText>
                        </SectionListItem >
                        <SectionListItem>
                            <Title2>Responsive Grid Layout Props</Title2>
                            <PlainText>The responsive grid layout can be used instead. It supports all of the props above, excepting layout. The new properties and changes are:</PlainText>
                            <CodeText>
                                 <Marked comment>// &#123;name: pxVal&#125;, e.g. &#123;lg: 1200, md: 996, sm: 768, xs: 480&#125;</Marked> <br /> 
                                <Marked comment>// Breakpoint names are arbitrary but must match in the cols and layouts objects.</Marked> <br /> 
                                <Marked ><Marked danger>breakpoints</Marked>: ?Object = &#123;lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0&#125;,</Marked> <br /> <br/>
                                <Marked comment>// # of cols. This is a breakpoint -> cols map, e.g. &#123;lg: 12, md: 10, ...&#125;</Marked> <br /> 
                                <Marked ><Marked danger>cols</Marked>: ?Object = &#123;lg: 12, md: 10, sm: 6, xs: 4, xxs: 2&#125;,</Marked> <br /> <br/>
                                <Marked comment>// margin (in pixels). Can be specified either as horizontal and vertical margin, e.g. `[10, 10]` or as a breakpoint -> margin map, e.g. `&#123;lg: [10, 10], md: [10, 10], ...&#125;.</Marked> <br /> 
                                <Marked ><Marked danger>margin</Marked>: [number, number] | &#123;[breakpoint: $Keys&lt;breakpoints&gt;]: [number, number]&#125;</Marked> <br /> <br/>
                                <Marked comment>// containerPadding (in pixels). Can be specified either as horizontal and vertical padding, e.g. `[10, 10]` or as a breakpoint -> containerPadding map, e.g. `&#123;lg: [10, 10], md: [10, 10], ...&#125;.</Marked> <br /> 
                                <Marked ><Marked danger>containerPadding</Marked>: [number, number] | &#123;[breakpoint: $Keys&lt;breakpoints&gt;]: [number, number]&#125;</Marked> <br /> <br/>
                                <Marked comment>// layouts is an object mapping breakpoints to layouts.</Marked> <br/> 
                                <Marked comment>// e.g. &#123;lg: Layout, md: Layout, ...&#125;</Marked> <br/> 
                                <Marked ><Marked danger>layouts</Marked>: &#123;[key: $Keys&lt;breakpoints&gt;]: Layout&#125;</Marked> <br/> <br/>
                                <Marked comment>//</Marked> <br /> <br/>
                                <Marked comment>// Callbacks</Marked> <br /> 
                                <Marked comment>//</Marked> <br /> <br/>
                                <Marked comment>// Calls back with breakpoint and new # cols</Marked><br/> <br/>
                                <Marked ><Marked danger>onBreakpointChange</Marked>: (newBreakpoint: string, newCols: number) => void,</Marked> <br /> <br/>
                                <Marked comment>// Callback so you can save the layout.</Marked> <br/> 
                                <Marked comment>// AllLayouts are keyed by breakpoint.</Marked> <br/>
                                <Marked ><Marked danger>onLayoutChange</Marked>: (currentLayout: Layout, allLayouts: &#123;[key: $Keys&lt;breakpoints&gt;]: Layout&#125;) => void,</Marked> <br/> <br/>
                                <Marked comment>// Callback when the width changes, so you can modify the layout as needed.</Marked> <br/>
                                <Marked ><Marked danger>onWidthChange</Marked>: (containerWidth: number, margin: [number, number], cols: number, containerPadding: [number, number]) => void;</Marked> <br/>
                            </CodeText>
                        </SectionListItem>
                    </SectionList >
                </Section >
            </Content >
        </GuideLayout>
    );
}

export default QuickStart;
