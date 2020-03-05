import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Instructions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.instructions2}>
      <View style={styles.groupView1}>
        <View style={styles.groupView}>
          <Text style={styles.tryTaggingThisScreenAsThe}>
            Try tagging this screen as the Splash Screen
          </Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-6.png")}
          />
        </View>
        <Image
          style={styles.group2Icon}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
      </View>
      <View style={styles.instructions}>
        <View style={styles.groupView8}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.locofyLogo1}
            resizeMode="cover"
            source={require("../assets/locofy-logo-1.png")}
          />
          <Image
            style={styles.group9Icon}
            resizeMode="cover"
            source={require("../assets/group9.png")}
          />
          <Image
            style={styles.group9Icon1}
            resizeMode="cover"
            source={require("../assets/group91.png")}
          />
          <View style={styles.groupView2}>
            <Text style={styles.importReactFromReactImp}>
              <Text style={styles.importReactFromContainer}>
                <Text style={styles.importReactFromReact}>
                  <Text style={styles.import}>import</Text>
                  <Text style={styles.react}>{` React `}</Text>
                  <Text style={styles.from}>from</Text>
                  <Text style={styles.text}>{` `}</Text>
                  <Text style={styles.react1}>"react"</Text>
                  <Text style={styles.text1}>;</Text>
                </Text>
                <Text style={styles.importAppHeaderFromA}>
                  <Text style={styles.import1}>import</Text>
                  <Text style={styles.appHeader}>{` { AppHeader } `}</Text>
                  <Text style={styles.from1}>from</Text>
                  <Text style={styles.text2}>{` `}</Text>
                  <Text style={styles.appHeader1}>"./app-header"</Text>
                </Text>
                <Text style={styles.importFooterFromFoot}>
                  <Text style={styles.import2}>import</Text>
                  <Text style={styles.footer}>{` { Footer } `}</Text>
                  <Text style={styles.from2}>from</Text>
                  <Text style={styles.text3}>{` `}</Text>
                  <Text style={styles.footer1}>"./footer"</Text>
                </Text>
                <Text style={styles.importHomeUicss}>
                  <Text style={styles.import3}>import</Text>
                  <Text style={styles.text4}> '</Text>
                  <Text style={styles.homeUicss}>./home-ui.css</Text>
                  <Text style={styles.text5}>'</Text>
                </Text>
                <Text style={styles.blankLine1}>
                  <Text style={styles.blankLine}> </Text>
                </Text>
                <Text style={styles.typeHomeUIProps}>
                  <Text style={styles.type}>{`type `}</Text>
                  <Text style={styles.homeUIProps}>HomeUIProps</Text>
                  <Text style={styles.text6}>{` = {`}</Text>
                </Text>
                <Text style={styles.headerHeaderProps}>
                  <Text style={styles.header1}>{`   header: `}</Text>
                  <Text style={styles.headerProps}>HeaderProps</Text>
                  <Text style={styles.text7}>;</Text>
                </Text>
                <Text style={styles.text9}>
                  <Text style={styles.text8}>{`};`}</Text>
                </Text>
                <Text style={styles.blankLine3}>
                  <Text style={styles.blankLine2}> </Text>
                </Text>
                <Text style={styles.exportConstHomeUIReactFun}>
                  <Text style={styles.export}>export</Text>
                  <Text style={styles.const}>{` const `}</Text>
                  <Text style={styles.homeUI}>HomeUI</Text>
                  <Text style={styles.text10}>{`: `}</Text>
                  <Text style={styles.reactFunctionComponent}>
                    React.FunctionComponent
                  </Text>
                  <Text style={styles.text11}>{`<`}</Text>
                  <Text style={styles.homeUIProps1}>HomeUIProps</Text>
                  <Text style={styles.reactmemo}>{`> = React.memo(`}</Text>
                </Text>
                <Text style={styles.header3}>
                  <Text style={styles.header2}>{`   ({ header }) => {`}</Text>
                </Text>
                <Text style={styles.return1}>
                  <Text style={styles.return}> return (</Text>
                </Text>
                <Text style={styles.divClasshomeUiRoot}>
                  <Text style={styles.divClass}>{`        <div class=`}</Text>
                  <Text style={styles.homeUiRoot}>{`"home-ui-root">`}</Text>
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.pluginMockupIcon}
            resizeMode="cover"
            source={require("../assets/pluginmockup.png")}
          />
          <View style={styles.groupView7}>
            <View style={styles.groupView6}>
              <View style={styles.groupView3}>
                <Text style={styles.getLocofyPlugin}>Get Locofy plugin</Text>
                <Image
                  style={styles.iconPlugin}
                  resizeMode="cover"
                  source={require("../assets/icon--plugin.png")}
                />
              </View>
              <View style={styles.groupView4}>
                <Text style={styles.watchDemo}>Watch demo</Text>
                <Image
                  style={styles.videoIcon}
                  resizeMode="cover"
                  source={require("../assets/video.png")}
                />
              </View>
              <View style={styles.groupView5}>
                <Text style={styles.guides}>Guides</Text>
                <Image
                  style={styles.books1Icon}
                  resizeMode="cover"
                  source={require("../assets/books-1.png")}
                />
              </View>
            </View>
          </View>
          <Text style={styles.shipProducts4XFasterConv}>
            <Text
              style={styles.shipProducts4X}
            >{`Ship products 4X faster - Convert `}</Text>
            <Text style={styles.figmaDesigns}>Figma designs</Text>
            <Text style={styles.to}>{` to `}</Text>
            <Text style={styles.reactNativeCode}>React Native code</Text>
            <Text style={styles.text12}>!</Text>
          </Text>
          <Text style={styles.turnYourDesignsIntoProduct}>
            Turn your designs into production-ready frontend code
          </Text>
        </View>
        <Image
          style={styles.guideGuyIcon}
          resizeMode="cover"
          source={require("../assets/guide-guy.png")}
        />
      </View>
      <View style={styles.gettingStartedTaggingOthe}>
        <View style={styles.groupView9}>
          <Text style={styles.taggingOtherLayers}>
            <Text style={styles.taggingOther}>{`Tagging Other `}</Text>
            <Text style={styles.layers}>Layers</Text>
          </Text>
          <Text style={styles.gettingStarted}>Getting Started</Text>
        </View>
        <Text style={styles.tagALayerAndFurtherCustom}>
          Tag a layer and further customize it in the properties, layout,
          styling and actions tabs.
        </Text>
        <View style={styles.groupView12}>
          <Text style={styles.selectTheSelectDeparture}>
            <Text
              style={styles.selectTheSelect}
            >{`Select the “Select Departure” Input on the design to the right and tag it as a `}</Text>
            <Text style={styles.textInput}>Text Input</Text>
            <Text style={styles.text13}>.</Text>
          </Text>
          <View style={styles.groupView11}>
            <Text style={styles.selectTheLAYER}>Select the LAYER</Text>
            <View style={styles.groupView10}>
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-110.png")}
              />
              <Text style={styles.text14}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupView16}>
          <View style={styles.groupView15}>
            <Text style={styles.nowLetsChooseTheVariatio}>
              <Text
                style={styles.nowLetsChoose}
              >{`Now, let’s choose the variation which was used in the design. Choose `}</Text>
              <Text style={styles.outlinedInput}>Outlined Input</Text>
              <Text style={styles.text15}>{`. `}</Text>
            </Text>
            <View style={styles.groupView14}>
              <Text style={styles.chooseVariation}>choose variation</Text>
              <View style={styles.groupView13}>
                <Image
                  style={styles.ellipseIcon1}
                  resizeMode="cover"
                  source={require("../assets/ellipse-111.png")}
                />
                <Text style={styles.text16}>2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView20}>
          <View style={styles.groupView19}>
            <Text style={styles.goToPropertiesTabSetLeft1}>
              <Text style={styles.goToPropertiesTabSetLeft}>
                <Text
                  style={styles.goToProperties}
                >{`Go to properties tab, set left icon to `}</Text>
              </Text>
              <Text style={styles.airplaneTakeoffInTheLeftI}>
                <Text style={styles.airplaneTakeoff}>airplane-takeoff</Text>
                <Text
                  style={styles.inTheLeft}
                >{` in the Left Icon field. `}</Text>
              </Text>
            </Text>
            <View style={styles.groupView18}>
              <Text style={styles.addProperties}>Add Properties</Text>
              <View style={styles.groupView17}>
                <Image
                  style={styles.ellipseIcon2}
                  resizeMode="cover"
                  source={require("../assets/ellipse-112.png")}
                />
                <Text style={styles.text17}>3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView24}>
          <View style={styles.groupView23}>
            <Text style={styles.goToStylingTabSetOutline1}>
              <Text style={styles.goToStylingTabSetOutline}>
                <Text
                  style={styles.goToStyling}
                >{`Go to styling tab, set `}</Text>
                <Text style={styles.outlineColorTo}>{`Outline color to `}</Text>
                <Text style={styles.dCDEDF}>{`“DCDEDF” `}</Text>
              </Text>
              <Text style={styles.andSetActiveOutlineColorT}>
                <Text style={styles.andSet}>{`and set `}</Text>
                <Text style={styles.activeOutlineColor}>
                  Active outline color
                </Text>
                <Text style={styles.to7F7F7F}> to “7F7F7F”</Text>
              </Text>
            </Text>
            <View style={styles.groupView22}>
              <Text style={styles.addStyles}>Add Styles</Text>
              <View style={styles.groupView21}>
                <Image
                  style={styles.ellipseIcon3}
                  resizeMode="cover"
                  source={require("../assets/ellipse-112.png")}
                />
                <Text style={styles.text18}>4</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView26}>
          <View style={styles.search}>
            <ScrollView
              style={styles.searchPageBody}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.searchPageBodyContent}
            >
              <View style={styles.flightSelection}>
                <View style={styles.roundTripSection}>
                  <View style={styles.form}>
                    <View style={styles.outlinedTextOnlyNoIcon} />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.groupView25}>
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
          </View>
          <View style={styles.tagsshort}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <View style={styles.group}>
              <Text style={styles.image}>Text Input</Text>
              <Image
                style={styles.blockTextInputIcon}
                resizeMode="cover"
                source={require("../assets/blocktext-input.png")}
              />
            </View>
          </View>
          <Image
            style={styles.ellipseIcon4}
            resizeMode="cover"
            source={require("../assets/ellipse-114.png")}
          />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector-111.png")}
          />
        </View>
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
        <View style={styles.lineView2} />
        <View style={styles.figmaPlugin291}>
          <Image
            style={styles.artboardCopy14FontCopyIcon}
            resizeMode="cover"
            source={require("../assets/artboardcopy14fontcopy.png")}
          />
          <Text style={styles.chooseAVariation}>Choose a variation</Text>
          <View style={styles.groupView29}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Image
              style={styles.image8Icon}
              resizeMode="cover"
              source={require("../assets/image-81.png")}
            />
            <View style={styles.groupView28}>
              <View style={styles.groupView27}>
                <Text style={styles.reactNativePaper}>React Native Paper</Text>
                <Image
                  style={styles.image4Icon}
                  resizeMode="cover"
                  source={require("../assets/image-41.png")}
                />
              </View>
            </View>
            <View style={styles.lineView3} />
            <Image
              style={styles.image9Icon}
              resizeMode="cover"
              source={require("../assets/image-9.png")}
            />
          </View>
        </View>
        <View style={styles.figmaPlugin206}>
          <Image
            style={styles.artboardCopy14FontCopyIcon1}
            resizeMode="cover"
            source={require("../assets/artboardcopy14fontcopy1.png")}
          />
          <View style={styles.groupView30}>
            <View style={styles.fields}>
              <Text style={styles.source}>Left Icon</Text>
              <View style={styles.frameView}>
                <Image
                  style={styles.vectorIcon2}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.select}>e.g. alert-circle</Text>
                <Text style={styles.select1}>Select page</Text>
                <Image
                  style={styles.crossIcon}
                  resizeMode="cover"
                  source={require("../assets/cross.png")}
                />
              </View>
            </View>
            <View style={styles.fields1}>
              <Text style={styles.source1}>Right Icon</Text>
              <View style={styles.frameView1}>
                <Image
                  style={styles.vectorIcon3}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.select2}>e.g. tick-circle-outline</Text>
                <Text style={styles.select3}>Select page</Text>
                <Image
                  style={styles.crossIcon1}
                  resizeMode="cover"
                  source={require("../assets/cross.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.figmaPlugin294}>
          <View style={styles.groupView34}>
            <View style={styles.component3}>
              <Text style={styles.basic}>Outline color</Text>
            </View>
            <View style={styles.groupView33}>
              <Text style={styles.dCDEDF2}>
                <Text style={styles.text19}>#</Text>
                <Text style={styles.dCDEDF1}>DCDEDF</Text>
              </Text>
              <Text style={styles.text20}>100%</Text>
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../assets/rectangle2.png")}
              />
              <View style={styles.groupView32}>
                <View style={styles.groupView31}>
                  <Text style={styles.select4}>Remove background color</Text>
                  <Image
                    style={styles.addRectangularCopy30Icon}
                    resizeMode="cover"
                    source={require("../assets/addrectangularcopy30.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.groupView38}>
            <View style={styles.component31}>
              <Text style={styles.basic1}>Active outline color</Text>
            </View>
            <View style={styles.groupView37}>
              <Text style={styles.f7F7F1}>
                <Text style={styles.text21}>#</Text>
                <Text style={styles.f7F7F}>7F7F7F</Text>
              </Text>
              <Text style={styles.text22}>100%</Text>
              <Image
                style={styles.rectangleIcon3}
                resizeMode="cover"
                source={require("../assets/rectangle3.png")}
              />
              <View style={styles.groupView36}>
                <View style={styles.groupView35}>
                  <Text style={styles.select5}>Remove background color</Text>
                  <Image
                    style={styles.addRectangularCopy30Icon1}
                    resizeMode="cover"
                    source={require("../assets/addrectangularcopy301.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView41}>
          <Text style={styles.selectTheSearchButtonOn}>
            <Text
              style={styles.selectTheSearch}
            >{`Select the “Search” button on the design to the right and select `}</Text>
            <Text style={styles.button}>Button</Text>
            <Text style={styles.inTheOther}>
              {" "}
              in the Other Layers section in the Locofy plugin
            </Text>
          </Text>
          <View style={styles.groupView40}>
            <Text style={styles.tagAsButton}>Tag as button</Text>
            <View style={styles.groupView39}>
              <Image
                style={styles.ellipseIcon5}
                resizeMode="cover"
                source={require("../assets/ellipse-115.png")}
              />
              <Text style={styles.text23}>1</Text>
            </View>
          </View>
        </View>
        <Text style={styles.taggingAButton}>tagging A Button</Text>
        <Text style={styles.taggingATextINPUT}>tagging A Text INPUT</Text>
        <View style={styles.groupView45}>
          <View style={styles.groupView43}>
            <View style={styles.groupView42}>
              <View style={styles.rectangleView6} />
              <ScrollView
                style={styles.searchPageBody1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.searchPageBody1Content}
              >
                <View style={styles.flightSelection1}>
                  <View style={styles.oneWaySection}>
                    <TouchableOpacity
                      style={styles.buttonPrimary}
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate("SearchResults")}
                    >
                      <Text style={styles.viewDetails}>Search</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <Image
            style={styles.buttonIcon}
            resizeMode="cover"
            source={require("../assets/button.png")}
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-7245.png")}
          />
          <View style={styles.groupView44}>
            <View style={styles.rectangleView7} />
            <View style={styles.rectangleView8} />
            <View style={styles.rectangleView9} />
            <View style={styles.rectangleView10} />
            <View style={styles.rectangleView11} />
          </View>
          <Image
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../assets/vector-112.png")}
          />
        </View>
        <View style={styles.groupView49}>
          <View style={styles.groupView48}>
            <Text style={styles.fromLayoutTabSelectAlignC}>
              <Text
                style={styles.fromLayoutTab}
              >{`From Layout tab select `}</Text>
              <Text style={styles.alignCenter}>Align Center</Text>
              <Text
                style={styles.toAlignButton}
              >{` to align button in center.  `}</Text>
            </Text>
            <View style={styles.groupView47}>
              <Text style={styles.editButtonLayout}>Edit button Layout</Text>
              <View style={styles.groupView46}>
                <Image
                  style={styles.ellipseIcon6}
                  resizeMode="cover"
                  source={require("../assets/ellipse-116.png")}
                />
                <Text style={styles.text24}>2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView52}>
          <Pressable
            style={styles.youCanAddActionForYourBu1}
            onPress={() => {}}
          >
            <Text style={styles.youCanAddActionForYourBu}>
              <Text
                style={styles.youCanAdd}
              >{`You can add action for your button. Select `}</Text>
              <Text style={styles.press}>Press</Text>
              <Text
                style={styles.fromChooseTrigger}
              >{` from Choose Trigger, Select `}</Text>
              <Text style={styles.pageChange}>Page Change</Text>
              <Text
                style={styles.fromChooseAction}
              >{` from Choose Action then select `}</Text>
              <Text style={styles.searchResult}>Search Result</Text>
              <Text style={styles.page}>{` page `}</Text>
            </Text>
            <Text style={styles.fromChoosePage1}>
              <Text style={styles.fromChoosePage}>from Choose Page.</Text>
            </Text>
          </Pressable>
          <View style={styles.groupView51}>
            <Text style={styles.addActions}>Add actions</Text>
            <View style={styles.groupView50}>
              <Image
                style={styles.ellipseIcon7}
                resizeMode="cover"
                source={require("../assets/ellipse-117.png")}
              />
              <Text style={styles.text25}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.lineView4} />
        <View style={styles.lineView5} />
        <View style={styles.groupView62}>
          <View style={styles.rectangleView12} />
          <View style={styles.groupView61}>
            <View style={styles.component32}>
              <Text style={styles.basic2}>Autolayout</Text>
            </View>
            <View style={styles.groupView53}>
              <Text style={styles.direction}>Direction</Text>
              <Image
                style={styles.group295Icon}
                resizeMode="cover"
                source={require("../assets/group295.png")}
              />
              <Image
                style={styles.group75Icon}
                resizeMode="cover"
                source={require("../assets/group75.png")}
              />
            </View>
            <Image
              style={styles.group295Icon1}
              resizeMode="cover"
              source={require("../assets/group2951.png")}
            />
            <View style={styles.groupView54}>
              <Text style={styles.align}>Align</Text>
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group-7120.png")}
              />
            </View>
            <View style={styles.groupView55}>
              <Text style={styles.justify}>Justify</Text>
              <Image
                style={styles.groupIcon2}
                resizeMode="cover"
                source={require("../assets/group-71201.png")}
              />
            </View>
            <View style={styles.groupView57}>
              <Text style={styles.wrapContent}>Wrap content</Text>
              <View style={styles.groupView56}>
                <Text style={styles.noWrap}>No wrap</Text>
                <Image
                  style={styles.path14Icon}
                  resizeMode="cover"
                  source={require("../assets/path14.png")}
                />
              </View>
            </View>
            <View style={styles.groupView59}>
              <Text style={styles.spacing}>Spacing</Text>
              <View style={styles.groupView58}>
                <Text style={styles.text26}>10</Text>
              </View>
            </View>
            <View style={styles.groupView60}>
              <Text style={styles.removeAutolayout}>Remove Autolayout</Text>
              <Image
                style={styles.smallIconscross}
                resizeMode="cover"
                source={require("../assets/smalliconscross.png")}
              />
            </View>
          </View>
          <Image
            style={styles.ellipseIcon8}
            resizeMode="cover"
            source={require("../assets/group-7245.png")}
          />
          <View style={styles.tablayout}>
            <View style={styles.rectangleView13} />
            <View style={styles.rectangleView14} />
            <Image
              style={styles.lineCopy4Icon}
              resizeMode="cover"
              source={require("../assets/linecopy4.png")}
            />
            <Image
              style={styles.lineCopy4Icon1}
              resizeMode="cover"
              source={require("../assets/linecopy41.png")}
            />
            <Text style={styles.properties}>Properties</Text>
            <Image
              style={styles.tabsIconsettings}
              resizeMode="cover"
              source={require("../assets/tabsiconsettings.png")}
            />
            <Text style={styles.layout}>Layout</Text>
            <Text style={styles.styling}>Styling</Text>
            <Text style={styles.actions}>Actions</Text>
            <View style={styles.tabsIconlayout}>
              <View style={styles.rectangleView15} />
              <View style={styles.rectangleView16} />
              <View style={styles.rectangleView17} />
              <View style={styles.rectangleView18} />
            </View>
            <Image
              style={styles.tabsIconstyle}
              resizeMode="cover"
              source={require("../assets/tabsiconstyle.png")}
            />
            <Image
              style={styles.tabsIconactions}
              resizeMode="cover"
              source={require("../assets/tabsiconactions.png")}
            />
          </View>
        </View>
        <View style={styles.figmaPlugin184}>
          <View style={styles.groupView63}>
            <View style={styles.component33}>
              <Text style={styles.basic3}>Trigger</Text>
            </View>
            <View style={styles.fields2}>
              <Text style={styles.source2}>Choose Trigger</Text>
              <View style={styles.frameView2}>
                <Image
                  style={styles.vectorIcon5}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
                <Text style={styles.select6}>Choose a trigger</Text>
                <Text style={styles.select7}>Select page</Text>
                <Image
                  style={styles.crossIcon2}
                  resizeMode="cover"
                  source={require("../assets/cross2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.groupView64}>
            <View style={styles.component34}>
              <Text style={styles.basic4}>Action</Text>
            </View>
            <View style={styles.fields3}>
              <Text style={styles.source3}>Choose Action</Text>
              <View style={styles.frameView3}>
                <Image
                  style={styles.vectorIcon6}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
                <Text style={styles.select8}>Choose an action</Text>
                <Text style={styles.select9}>Select page</Text>
                <Image
                  style={styles.crossIcon3}
                  resizeMode="cover"
                  source={require("../assets/cross2.png")}
                />
              </View>
            </View>
            <View style={styles.fields4}>
              <Text style={styles.source4}>Choose Page</Text>
              <View style={styles.frameView4}>
                <Image
                  style={styles.vectorIcon7}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
                <Text style={styles.select10}>Choose your page</Text>
                <Text style={styles.select11}>Select page</Text>
                <Image
                  style={styles.crossIcon4}
                  resizeMode="cover"
                  source={require("../assets/cross2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.tabactions}>
            <View style={styles.rectangleView19} />
            <View style={styles.rectangleView20} />
            <Image
              style={styles.lineCopy4Icon2}
              resizeMode="cover"
              source={require("../assets/linecopy42.png")}
            />
            <Image
              style={styles.lineCopy4Icon3}
              resizeMode="cover"
              source={require("../assets/linecopy43.png")}
            />
            <Text style={styles.properties1}>Properties</Text>
            <Image
              style={styles.tabsIconsettings1}
              resizeMode="cover"
              source={require("../assets/tabsiconsettings1.png")}
            />
            <Text style={styles.layout1}>Layout</Text>
            <Text style={styles.styling1}>Styling</Text>
            <Text style={styles.actions1}>Actions</Text>
            <View style={styles.tabsIconlayout1}>
              <View style={styles.rectangleView21} />
              <View style={styles.rectangleView22} />
              <View style={styles.rectangleView23} />
              <View style={styles.rectangleView24} />
            </View>
            <Image
              style={styles.tabsIconstyle1}
              resizeMode="cover"
              source={require("../assets/tabsiconstyle1.png")}
            />
            <Image
              style={styles.tabsIconactions1}
              resizeMode="cover"
              source={require("../assets/tabsiconactions1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.gettingStartedSettingUpN}>
        <Image
          style={styles.image36Icon}
          resizeMode="cover"
          source={require("../assets/image-36.png")}
        />
        <View style={styles.groupView65}>
          <Text style={styles.settingUpTabNavigation}>
            <Text style={styles.settingUp}>Setting up</Text>
            <Text style={styles.tabNavigation}>tab Navigation</Text>
          </Text>
          <Text style={styles.gettingStarted1}>Getting Started</Text>
        </View>
        <Text style={styles.nextSetUpBottomTabNaviga}>
          Next, set up Bottom tab navigation for the FickleFlight App
        </Text>
        <View style={styles.groupView68}>
          <Text style={styles.firstEnsureThatYouHaveNo}>
            <Text
              style={styles.firstEnsureThat}
            >{`First, ensure that you have not selected any layer in Figma. Start by clicking `}</Text>
            <Text style={styles.bottomTab}>Bottom Tab</Text>
            <Text style={styles.inThePlugin}> in the plugin.</Text>
          </Text>
          <View style={styles.groupView67}>
            <Text style={styles.tagBottomTab}>Tag Bottom tab</Text>
            <View style={styles.groupView66}>
              <Image
                style={styles.ellipseIcon9}
                resizeMode="cover"
                source={require("../assets/ellipse-110.png")}
              />
              <Text style={styles.text27}>1</Text>
            </View>
          </View>
        </View>
        <Text style={styles.selectAllBottomTabsFromAl1}>
          <Text style={styles.selectAllBottomTabsFromAl}>
            <Text
              style={styles.selectAllBottom}
            >{`Select all bottom tabs from all screens, then `}</Text>
          </Text>
          <Text style={styles.clickDoneToSave}>
            <Text style={styles.click}>{`click `}</Text>
            <Text style={styles.done}>Done</Text>
            <Text style={styles.toSave}> to save.</Text>
          </Text>
        </Text>
        <View style={styles.groupView72}>
          <View style={styles.groupView71}>
            <Text style={styles.clickOnLocateInTheActive}>
              <Text style={styles.clickOn}>{`Click on `}</Text>
              <Text style={styles.locate}>locate</Text>
              <Text style={styles.inThe}>{` in the `}</Text>
              <Text style={styles.activeColumn}>active column</Text>
              <Text style={styles.for}>{` for `}</Text>
              <Text style={styles.text28}>{`#2 `}</Text>
              <Text style={styles.whichIsThe}>
                {" "}
                which is the “booking” tab.
              </Text>
            </Text>
            <View style={styles.groupView70}>
              <Text style={styles.sETUPACTIVESTATE}>SET UP ACTIVE STATE</Text>
              <View style={styles.groupView69}>
                <Image
                  style={styles.ellipseIcon10}
                  resizeMode="cover"
                  source={require("../assets/ellipse-111.png")}
                />
                <Text style={styles.text29}>2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView76}>
          <View style={styles.groupView75}>
            <Text style={styles.clickOnLocateInTheContent}>
              <Text style={styles.clickOn1}>{`Click on `}</Text>
              <Text style={styles.locate1}>locate</Text>
              <Text style={styles.inThe1}>{` in the `}</Text>
              <Text style={styles.contentColumn}>content column</Text>
              <Text style={styles.for1}>{` for `}</Text>
              <Text style={styles.text30}>{`#2 `}</Text>
              <Text style={styles.whichIsThe1}>
                {" "}
                which is the “booking” tab.
              </Text>
            </Text>
            <View style={styles.groupView74}>
              <Text style={styles.sETUPContent}>SET UP Content</Text>
              <View style={styles.groupView73}>
                <Image
                  style={styles.ellipseIcon11}
                  resizeMode="cover"
                  source={require("../assets/ellipse-112.png")}
                />
                <Text style={styles.text31}>3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupView80}>
          <View style={styles.groupView79}>
            <Text style={styles.useTheSameProcessAboveTo}>
              Use the same process above to set up the Active/Inactive icons and
              Content for all 5 tabs, and click done.
            </Text>
            <View style={styles.groupView78}>
              <Text style={styles.sETUPOtherTabs}>SET UP Other tabs</Text>
              <View style={styles.groupView77}>
                <Image
                  style={styles.ellipseIcon12}
                  resizeMode="cover"
                  source={require("../assets/ellipse-112.png")}
                />
                <Text style={styles.text32}>4</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.youWillBeAskedToLocateTh}>
          You will be asked to locate the active state for this tab in you
          design. Select the element and proceed with that.
        </Text>
        <Text style={styles.youWillBeAskedToLocateTh1}>
          <Text
            style={styles.youWillBe}
          >{`You will be asked to locate the the `}</Text>
          <Text style={styles.contentrespectiveScreen}>
            content/respective screen
          </Text>
          <Text style={styles.forThatTab}>
            {" "}
            for that tab. Select the “Booking” page and proceed with that
          </Text>
        </Text>
        <View style={styles.lineView6} />
        <View style={styles.lineView7} />
        <View style={styles.lineView8} />
        <View style={styles.tagsdefault}>
          <Image
            style={styles.rectangleIcon4}
            resizeMode="cover"
            source={require("../assets/rectangle4.png")}
          />
          <View style={styles.group1}>
            <Text style={styles.splashScreen}>
              <Text style={styles.splashScreenTxtContainer}>
                <Text style={styles.bottom}>Bottom</Text>
                <Text style={styles.tabs}>Tabs</Text>
              </Text>
            </Text>
            <Image
              style={styles.blockbottomtabsIcon}
              resizeMode="cover"
              source={require("../assets/blockbottomtabs.png")}
            />
          </View>
          <Image
            style={styles.tickIcon}
            resizeMode="cover"
            source={require("../assets/tick.png")}
          />
        </View>
        <View style={styles.groupView82}>
          <View style={styles.bottomTab6}>
            <View style={styles.bottomTab1}>
              <Image
                style={styles.iconExploreSelected}
                resizeMode="cover"
                source={require("../assets/icon--exploreselected10.png")}
              />
              <Text style={[styles.search1, styles.mt6_38]}>Explore</Text>
            </View>
            <View style={[styles.bottomTab2, styles.ml4_56]}>
              <Image
                style={styles.iconItinerary}
                resizeMode="cover"
                source={require("../assets/icon--itinerary10.png")}
              />
              <Text style={[styles.search2, styles.mt6_38]}>Bookings</Text>
            </View>
            <View style={[styles.bottomTab3, styles.ml4_56]}>
              <Image
                style={styles.iconSearchFlights}
                resizeMode="cover"
                source={require("../assets/icon--searchflights9.png")}
              />
              <Text style={[styles.search3, styles.mt6_38]}>Search</Text>
            </View>
            <View style={[styles.bottomTab4, styles.ml4_56]}>
              <Image
                style={styles.iconOffers}
                resizeMode="cover"
                source={require("../assets/icon--offers10.png")}
              />
              <Text style={[styles.search4, styles.mt6_38]}>Offers</Text>
            </View>
            <View style={[styles.bottomTab5, styles.ml4_56]}>
              <Image
                style={styles.iconUserprofile}
                resizeMode="cover"
                source={require("../assets/icon--userprofile10.png")}
              />
              <Text style={[styles.search5, styles.mt6_38]}>Profile</Text>
            </View>
          </View>
          <View style={styles.groupView81}>
            <View style={styles.rectangleView25} />
            <View style={styles.rectangleView26} />
            <View style={styles.rectangleView27} />
            <View style={styles.rectangleView28} />
            <View style={styles.rectangleView29} />
          </View>
        </View>
        <View style={styles.groupView84}>
          <View style={styles.bottomTab12}>
            <View style={styles.bottomTab7}>
              <Image
                style={styles.iconExploreSelected1}
                resizeMode="cover"
                source={require("../assets/icon--exploreselected11.png")}
              />
              <Text style={[styles.search6, styles.mt6_38]}>Explore</Text>
            </View>
            <View style={[styles.bottomTab8, styles.ml4_56]}>
              <Image
                style={styles.iconItinerary1}
                resizeMode="cover"
                source={require("../assets/icon--itinerary10.png")}
              />
              <Text style={[styles.search7, styles.mt6_38]}>Bookings</Text>
            </View>
            <View style={[styles.bottomTab9, styles.ml4_56]}>
              <Image
                style={styles.iconSearchFlights1}
                resizeMode="cover"
                source={require("../assets/icon--searchflights10.png")}
              />
              <Text style={[styles.search8, styles.mt6_38]}>Search</Text>
            </View>
            <View style={[styles.bottomTab10, styles.ml4_56]}>
              <Image
                style={styles.iconOffers1}
                resizeMode="cover"
                source={require("../assets/icon--offers10.png")}
              />
              <Text style={[styles.search9, styles.mt6_38]}>Offers</Text>
            </View>
            <View style={[styles.bottomTab11, styles.ml4_56]}>
              <Image
                style={styles.iconUserprofile1}
                resizeMode="cover"
                source={require("../assets/icon--userprofile10.png")}
              />
              <Text style={[styles.search10, styles.mt6_38]}>Profile</Text>
            </View>
          </View>
          <View style={styles.groupView83}>
            <View style={styles.rectangleView30} />
            <View style={styles.rectangleView31} />
            <View style={styles.rectangleView32} />
            <View style={styles.rectangleView33} />
            <View style={styles.rectangleView34} />
          </View>
        </View>
        <View style={styles.groupView86}>
          <View style={styles.bottomTab18}>
            <View style={styles.bottomTab13}>
              <Image
                style={styles.iconExploreSelected2}
                resizeMode="cover"
                source={require("../assets/icon--exploreselected11.png")}
              />
              <Text style={[styles.search11, styles.mt6_38]}>Explore</Text>
            </View>
            <View style={[styles.bottomTab14, styles.ml4_56]}>
              <Image
                style={styles.iconItinerary2}
                resizeMode="cover"
                source={require("../assets/icon--itinerary12.png")}
              />
              <Text style={[styles.search12, styles.mt6_38]}>Bookings</Text>
            </View>
            <View style={[styles.bottomTab15, styles.ml4_56]}>
              <Image
                style={styles.iconSearchFlights2}
                resizeMode="cover"
                source={require("../assets/icon--searchflights9.png")}
              />
              <Text style={[styles.search13, styles.mt6_38]}>Search</Text>
            </View>
            <View style={[styles.bottomTab16, styles.ml4_56]}>
              <Image
                style={styles.iconOffers2}
                resizeMode="cover"
                source={require("../assets/icon--offers10.png")}
              />
              <Text style={[styles.search14, styles.mt6_38]}>Offers</Text>
            </View>
            <View style={[styles.bottomTab17, styles.ml4_56]}>
              <Image
                style={styles.iconUserprofile2}
                resizeMode="cover"
                source={require("../assets/icon--userprofile10.png")}
              />
              <Text style={[styles.search15, styles.mt6_38]}>Profile</Text>
            </View>
          </View>
          <View style={styles.groupView85}>
            <View style={styles.rectangleView35} />
            <View style={styles.rectangleView36} />
            <View style={styles.rectangleView37} />
            <View style={styles.rectangleView38} />
            <View style={styles.rectangleView39} />
          </View>
        </View>
        <View style={styles.groupView89}>
          <View style={styles.groupView88}>
            <View style={styles.bottomTab24}>
              <View style={styles.bottomTab19}>
                <Image
                  style={styles.iconExploreSelected3}
                  resizeMode="cover"
                  source={require("../assets/icon--exploreselected13.png")}
                />
                <Text style={[styles.search16, styles.mt9_69]}>Explore</Text>
              </View>
              <View style={[styles.bottomTab20, styles.ml6_92]}>
                <Image
                  style={styles.iconItinerary3}
                  resizeMode="cover"
                  source={require("../assets/icon--itinerary13.png")}
                />
                <Text style={[styles.search17, styles.mt9_69]}>Bookings</Text>
              </View>
              <View style={[styles.bottomTab21, styles.ml6_92]}>
                <Image
                  style={styles.iconSearchFlights3}
                  resizeMode="cover"
                  source={require("../assets/icon--searchflights12.png")}
                />
                <Text style={[styles.search18, styles.mt9_69]}>Search</Text>
              </View>
              <View style={[styles.bottomTab22, styles.ml6_92]}>
                <Image
                  style={styles.iconOffers3}
                  resizeMode="cover"
                  source={require("../assets/icon--offers13.png")}
                />
                <Text style={[styles.search19, styles.mt9_69]}>Offers</Text>
              </View>
              <View style={[styles.bottomTab23, styles.ml6_92]}>
                <Image
                  style={styles.iconUserprofile3}
                  resizeMode="cover"
                  source={require("../assets/icon--userprofile13.png")}
                />
                <Text style={[styles.search20, styles.mt9_69]}>Profile</Text>
              </View>
            </View>
            <View style={styles.groupView87}>
              <View style={styles.rectangleView40} />
              <View style={styles.rectangleView41} />
              <View style={styles.rectangleView42} />
              <View style={styles.rectangleView43} />
              <View style={styles.rectangleView44} />
            </View>
          </View>
        </View>
        <View style={styles.groupView91}>
          <View style={styles.bottomTab30}>
            <View style={styles.bottomTab25}>
              <Image
                style={styles.iconExploreSelected4}
                resizeMode="cover"
                source={require("../assets/icon--exploreselected11.png")}
              />
              <Text style={[styles.search21, styles.mt6_38]}>Explore</Text>
            </View>
            <View style={[styles.bottomTab26, styles.ml4_56]}>
              <Image
                style={styles.iconItinerary4}
                resizeMode="cover"
                source={require("../assets/icon--itinerary10.png")}
              />
              <Text style={[styles.search22, styles.mt6_38]}>Bookings</Text>
            </View>
            <View style={[styles.bottomTab27, styles.ml4_56]}>
              <Image
                style={styles.iconSearchFlights4}
                resizeMode="cover"
                source={require("../assets/icon--searchflights9.png")}
              />
              <Text style={[styles.search23, styles.mt6_38]}>Search</Text>
            </View>
            <View style={[styles.bottomTab28, styles.ml4_56]}>
              <Image
                style={styles.iconOffers4}
                resizeMode="cover"
                source={require("../assets/icon--offers14.png")}
              />
              <Text style={[styles.search24, styles.mt6_38]}>Offers</Text>
            </View>
            <View style={[styles.bottomTab29, styles.ml4_56]}>
              <Image
                style={styles.iconUserprofile4}
                resizeMode="cover"
                source={require("../assets/icon--userprofile10.png")}
              />
              <Text style={[styles.search25, styles.mt6_38]}>Profile</Text>
            </View>
          </View>
          <View style={styles.groupView90}>
            <View style={styles.rectangleView45} />
            <View style={styles.rectangleView46} />
            <View style={styles.rectangleView47} />
            <View style={styles.rectangleView48} />
            <View style={styles.rectangleView49} />
          </View>
        </View>
        <Image
          style={styles.image33Icon}
          resizeMode="cover"
          source={require("../assets/image-33.png")}
        />
        <View style={styles.groupView92}>
          <View style={styles.rectangleView50} />
          <View style={styles.rectangleView51} />
          <View style={styles.rectangleView52} />
          <View style={styles.rectangleView53} />
          <View style={styles.rectangleView54} />
        </View>
        <View style={styles.groupView93}>
          <View style={styles.rectangleView55} />
          <View style={styles.rectangleView56} />
          <View style={styles.rectangleView57} />
          <View style={styles.rectangleView58} />
          <View style={styles.rectangleView59} />
        </View>
        <View style={styles.groupView96}>
          <View style={styles.bookings}>
            <View style={styles.statusBarLight}>
              <Image
                style={styles.icons}
                resizeMode="cover"
                source={require("../assets/icons1.png")}
              />
              <Text style={styles.time}>9:41</Text>
            </View>
            <ScrollView
              style={styles.bookingsBody}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.bookingsBodyScrollViewContent}
            >
              <Text style={styles.upcomingBookings}>Upcoming Bookings</Text>
              <View style={[styles.bookingCard, styles.mt4_63]}>
                <Image
                  style={styles.bookingImageIcon}
                  resizeMode="cover"
                  source={require("../assets/booking-image1.png")}
                />
                <View style={[styles.bookingDetails, styles.mt5_62]}>
                  <View style={styles.frameView6}>
                    <View style={styles.group13}>
                      <Text style={styles.sIN}>SIN</Text>
                      <Text style={[styles.singapore, styles.mt1_98]}>
                        Singapore
                      </Text>
                      <Text style={[styles.terminal1, styles.mt1_98]}>
                        Terminal 1
                      </Text>
                    </View>
                    <View style={[styles.frameView5, styles.ml5_95]}>
                      <Image
                        style={styles.line2Icon}
                        resizeMode="cover"
                        source={require("../assets/line27.png")}
                      />
                      <Image
                        style={styles.ovalIcon}
                        resizeMode="cover"
                        source={require("../assets/oval16.png")}
                      />
                      <Image
                        style={styles.iconFlight}
                        resizeMode="cover"
                        source={require("../assets/icon--flight7.png")}
                      />
                      <Image
                        style={styles.ovalIcon1}
                        resizeMode="cover"
                        source={require("../assets/oval17.png")}
                      />
                    </View>
                    <View style={[styles.group131, styles.ml5_95]}>
                      <Text style={styles.lAX}>LAX</Text>
                      <Text style={[styles.losAngeles, styles.mt1_98]}>
                        Los Angeles
                      </Text>
                      <Text style={[styles.terminal4, styles.mt1_98]}>
                        Terminal 4
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.frameView9, styles.mt4_63]}>
                    <View style={styles.frameView7}>
                      <View style={styles.groupView94}>
                        <View style={styles.rectangleView60} />
                        <Image
                          style={styles.image2Icon}
                          resizeMode="cover"
                          source={require("../assets/image-23.png")}
                        />
                      </View>
                      <Text style={[styles.unitedAirlines, styles.ml2_65]}>
                        United Airlines
                      </Text>
                    </View>
                    <View style={styles.frameView8}>
                      <Image
                        style={styles.fluenttimer24RegularIcon}
                        resizeMode="cover"
                        source={require("../assets/fluenttimer24regular6.png")}
                      />
                      <Text style={[styles.hr40min, styles.ml1_32]}>
                        01 hr 40min
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.showMoreDetails, styles.mt4_63]}>
                    Show more details...
                  </Text>
                  <View style={[styles.frameView10, styles.mt4_63]} />
                </View>
                <View style={[styles.editButton, styles.mt5_62]}>
                  <View style={styles.buttonPrimary1}>
                    <Text style={styles.viewDetails1}>Edit Booking</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.bottomTab36}>
              <View style={styles.bottomTab31}>
                <Image
                  style={styles.iconExploreSelected5}
                  resizeMode="cover"
                  source={require("../assets/icon--exploreselected15.png")}
                />
                <Text style={[styles.search26, styles.mt4_63]}>Explore</Text>
              </View>
              <View style={[styles.bottomTab32, styles.ml3_31]}>
                <Image
                  style={styles.iconItinerary5}
                  resizeMode="cover"
                  source={require("../assets/icon--itinerary15.png")}
                />
                <Text style={[styles.search27, styles.mt4_63]}>Bookings</Text>
              </View>
              <View style={[styles.bottomTab33, styles.ml3_31]}>
                <Image
                  style={styles.iconSearchFlights5}
                  resizeMode="cover"
                  source={require("../assets/icon--searchflights14.png")}
                />
                <Text style={[styles.search28, styles.mt4_63]}>Search</Text>
              </View>
              <View style={[styles.bottomTab34, styles.ml3_31]}>
                <Image
                  style={styles.iconOffers5}
                  resizeMode="cover"
                  source={require("../assets/icon--offers15.png")}
                />
                <Text style={[styles.search29, styles.mt4_63]}>Offers</Text>
              </View>
              <View style={[styles.bottomTab35, styles.ml3_31]}>
                <Image
                  style={styles.iconUserprofile5}
                  resizeMode="cover"
                  source={require("../assets/icon--userprofile15.png")}
                />
                <Text style={[styles.search30, styles.mt4_63]}>Profile</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupView95}>
            <View style={styles.rectangleView61} />
            <View style={styles.rectangleView62} />
            <View style={styles.rectangleView63} />
            <View style={styles.rectangleView64} />
            <View style={styles.rectangleView65} />
          </View>
        </View>
        <Image
          style={styles.image37Icon}
          resizeMode="cover"
          source={require("../assets/image-37.png")}
        />
        <Image
          style={styles.ellipseIcon13}
          resizeMode="cover"
          source={require("../assets/ellipse-212.png")}
        />
        <Image
          style={styles.ellipseIcon14}
          resizeMode="cover"
          source={require("../assets/ellipse-212.png")}
        />
        <Image
          style={styles.ellipseIcon15}
          resizeMode="cover"
          source={require("../assets/ellipse-212.png")}
        />
        <Image
          style={styles.ellipseIcon16}
          resizeMode="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <View style={styles.groupView98}>
          <View style={styles.groupView97}>
            <View style={styles.rectangleView66} />
            <View style={styles.rectangleView67} />
            <View style={styles.rectangleView68} />
            <View style={styles.rectangleView69} />
            <View style={styles.rectangleView70} />
          </View>
          <View style={styles.bottomTab42}>
            <View style={styles.bottomTab37}>
              <Image
                style={styles.iconExploreSelected6}
                resizeMode="cover"
                source={require("../assets/icon--exploreselected11.png")}
              />
              <Text style={[styles.search31, styles.mt6_38]}>Explore</Text>
            </View>
            <View style={[styles.bottomTab38, styles.ml4_56]}>
              <Image
                style={styles.iconItinerary6}
                resizeMode="cover"
                source={require("../assets/icon--itinerary10.png")}
              />
              <Text style={[styles.search32, styles.mt6_38]}>Bookings</Text>
            </View>
            <View style={[styles.bottomTab39, styles.ml4_56]}>
              <Image
                style={styles.iconSearchFlights6}
                resizeMode="cover"
                source={require("../assets/icon--searchflights9.png")}
              />
              <Text style={[styles.search33, styles.mt6_38]}>Search</Text>
            </View>
            <View style={[styles.bottomTab40, styles.ml4_56]}>
              <Image
                style={styles.iconOffers6}
                resizeMode="cover"
                source={require("../assets/icon--offers16.png")}
              />
              <Text style={[styles.search34, styles.mt6_38]}>Offers</Text>
            </View>
            <View style={[styles.bottomTab41, styles.ml4_56]}>
              <Image
                style={styles.iconUserprofile6}
                resizeMode="cover"
                source={require("../assets/icon--userprofile16.png")}
              />
              <Text style={[styles.search35, styles.mt6_38]}>Profile</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.image53Icon}
          resizeMode="cover"
          source={require("../assets/image-53.png")}
        />
      </View>
      <View style={styles.view}>
        <Image
          style={styles.ellipseIcon17}
          resizeMode="cover"
          source={require("../assets/ellipse-123.png")}
        />
        <Text style={styles.text33}>2</Text>
      </View>
      <View style={styles.view1}>
        <Image
          style={styles.ellipseIcon18}
          resizeMode="cover"
          source={require("../assets/ellipse-124.png")}
        />
        <Text style={styles.text34}>3</Text>
      </View>
      <Text style={styles.instructions1}>Instructions</Text>
      <View style={styles.gettingStartedTaggingGlob}>
        <View style={styles.groupView99}>
          <Text style={styles.taggingGlobalLayers}>Tagging Global Layers</Text>
          <Text style={styles.gettingStarted2}>Getting Started</Text>
        </View>
        <Text
          style={styles.startByTaggingTheLayersOn}
        >{`Start by tagging the layers on this Fickle Flight Figma file. `}</Text>
        <Text style={styles.greatJobYouveJustTagged}>
          <Text
            style={styles.greatJobYouve}
          >{`Great job! You’ve just tagged a Splash Screen! `}</Text>
          <Text style={styles.letsTryTagging}>
            Let’s try tagging another layer.
          </Text>
        </Text>
        <View style={styles.groupView102}>
          <Text style={styles.selectTheSplashScreenScr}>
            <Text
              style={styles.selectTheSplash}
            >{`Select the “Splash Screen” Screen on the design to the right and select `}</Text>
            <Text style={styles.splashScreen1}>Splash Screen</Text>
            <Text style={styles.inTheLocofy}> in the Locofy plugin</Text>
          </Text>
          <View style={styles.groupView101}>
            <Text style={styles.selectLAYERAndChooseTagOn}>
              Select LAYER and choose tag on plugin
            </Text>
            <View style={styles.groupView100}>
              <Image
                style={styles.ellipseIcon19}
                resizeMode="cover"
                source={require("../assets/ellipse-125.png")}
              />
              <Text style={styles.text35}>1</Text>
            </View>
          </View>
        </View>
        <Text style={styles.tRYTaggingAGlobalLayer}>
          TRY: tagging a Global Layer
        </Text>
        <View style={styles.groupView104}>
          <View style={styles.tagsdefault1}>
            <Image
              style={styles.rectangleIcon5}
              resizeMode="cover"
              source={require("../assets/rectangle5.png")}
            />
            <View style={styles.group2}>
              <Text style={styles.splashScreen2}>
                <Text style={styles.splashScreenTxtContainer1}>
                  <Text style={styles.splash}>Splash</Text>
                  <Text style={styles.screen}>Screen</Text>
                </Text>
              </Text>
              <Image
                style={styles.blocksplashIcon}
                resizeMode="cover"
                source={require("../assets/blocksplash.png")}
              />
            </View>
            <Image
              style={styles.tickIcon1}
              resizeMode="cover"
              source={require("../assets/tick1.png")}
            />
          </View>
          <Image
            style={styles.ellipseIcon20}
            resizeMode="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Image
            style={styles.vectorIcon8}
            resizeMode="cover"
            source={require("../assets/vector-12.png")}
          />
          <LinearGradient
            style={styles.splashScreen3}
            locations={[0, 1]}
            colors={["#10579b", "#3aa4c8"]}
          >
            <ImageBackground
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/splashscreen1.png")}
            >
              <View style={styles.frameView11}>
                <View style={styles.statusBarDark}>
                  <Image
                    style={styles.icons1}
                    resizeMode="cover"
                    source={require("../assets/icons2.png")}
                  />
                  <Text style={styles.time1}>9:41</Text>
                </View>
                <View style={[styles.group3, styles.mt72_14]}>
                  <View style={styles.group21}>
                    <Text style={styles.fickle}>Fickle</Text>
                    <Text style={styles.fligh}>Fligh</Text>
                    <Image
                      style={styles.tIcon}
                      resizeMode="cover"
                      source={require("../assets/t.png")}
                    />
                    <Image
                      style={styles.pathIcon}
                      resizeMode="cover"
                      source={require("../assets/path.png")}
                    />
                    <Text style={styles.gettingYouWhereYouNeedTo}>
                      Getting you where you need to go
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.group34Icon, styles.mt72_14]}
                  resizeMode="cover"
                  source={require("../assets/group34.png")}
                />
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={styles.groupView103}>
            <View style={styles.rectangleView71} />
            <View style={styles.rectangleView72} />
            <View style={styles.rectangleView73} />
            <View style={styles.rectangleView74} />
            <View style={styles.rectangleView75} />
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <Image
          style={styles.ellipseIcon21}
          resizeMode="cover"
          source={require("../assets/ellipse-126.png")}
        />
        <Text style={styles.text36}>1</Text>
      </View>
      <View style={styles.lineView9} />
      <View style={styles.lineView10} />
      <View style={styles.gettingStartedPreview}>
        <Text style={styles.hereAreMoreScreensForThe}>
          <Text style={styles.hereAreMore}>
            Here are more screens for the FickleFlight mobile app.
          </Text>
          <Text style={styles.blankLine4}> </Text>
          <Text style={styles.theyHaveBeen}>
            They have been pre-tagged and you can select the elements to see how
            they have been set up on the Locofy plugin.
          </Text>
        </Text>
        <View style={styles.groupView105}>
          <Text style={styles.moreScreens}>More Screens</Text>
          <Text style={styles.gettingStarted3}>Getting Started</Text>
        </View>
      </View>
      <View style={styles.gettingStartedSyncToStud}>
        <Text style={styles.onceYouAreHappyWithYourP}>
          Once you are happy with your preview, you are now ready to sync to
          Locofy Builder where you can view and export your code.
        </Text>
        <View style={styles.groupView108}>
          <Text style={styles.onThisFigmaFileSelectThe}>
            On this Figma file, select the all the Mobile App frames you wish to
            sync and click the “View code” button.
          </Text>
          <View style={styles.groupView107}>
            <Text style={styles.selectTheFrames}>Select the frames</Text>
            <View style={styles.groupView106}>
              <Image
                style={styles.ellipseIcon22}
                resizeMode="cover"
                source={require("../assets/ellipse-127.png")}
              />
              <Text style={styles.text37}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupView110}>
          <View style={styles.groupView109}>
            <Image
              style={styles.image43Icon}
              resizeMode="cover"
              source={require("../assets/image-43.png")}
            />
            <Image
              style={styles.ellipseIcon23}
              resizeMode="cover"
              source={require("../assets/ellipse-6.png")}
            />
          </View>
        </View>
        <View style={styles.groupView111}>
          <Text style={styles.syncToLocofyBuilder}>
            <Text style={styles.syncTo}>{`Sync to `}</Text>
            <Text style={styles.locofyBuilder}>Locofy Builder</Text>
          </Text>
          <Text style={styles.gettingStarted4}>Getting Started</Text>
        </View>
        <View style={styles.groupView115}>
          <View style={styles.groupView114}>
            <Text style={styles.changeYourFrameworkSettings}>
              Change your Framework settings. Then hit “View Code in Builder”.
            </Text>
            <View style={styles.groupView113}>
              <Text style={styles.syncToLOCOFYBuilder}>
                Sync to LOCOFY builder
              </Text>
              <View style={styles.groupView112}>
                <Image
                  style={styles.ellipseIcon24}
                  resizeMode="cover"
                  source={require("../assets/ellipse-128.png")}
                />
                <Text style={styles.text38}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.lineView11} />
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-773.png")}
          />
        </View>
      </View>
      <View style={styles.gettingStartedSyncToStud1}>
        <Text style={styles.onceTheSyncIsCompleteYou}>
          Once the sync is complete, you’ll be taken to the Locofy Builder.
        </Text>
        <View style={styles.groupView116}>
          <Text style={styles.viewAndExportCodeOnLocofy}>
            <Text style={styles.viewAnd}>{`View and `}</Text>
            <Text style={styles.exportCodeOn}>{`Export code on `}</Text>
            <Text style={styles.locofyBuilder1}>Locofy Builder</Text>
          </Text>
          <Text style={styles.gettingStarted5}>Getting Started</Text>
        </View>
        <View style={styles.groupView120}>
          <Text style={styles.onceYourProjectHasBeenSyn}>
            Once your project has been synced, you can now view the code in the
            builder and make further changes.
          </Text>
          <View style={styles.groupView117}>
            <Image
              style={styles.image47Icon}
              resizeMode="cover"
              source={require("../assets/image-47.png")}
            />
            <View style={styles.rectangleView76} />
          </View>
          <View style={styles.groupView119}>
            <Text style={styles.viewCodeAndMakeChanges}>
              View code and make changes
            </Text>
            <View style={styles.groupView118}>
              <Image
                style={styles.ellipseIcon25}
                resizeMode="cover"
                source={require("../assets/ellipse-129.png")}
              />
              <Text style={styles.text39}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupView126}>
          <View style={styles.groupView123}>
            <Image
              style={styles.image49Icon}
              resizeMode="cover"
              source={require("../assets/image-49.png")}
            />
            <View style={styles.groupView122}>
              <View style={styles.groupView121}>
                <Image
                  style={styles.image48Icon}
                  resizeMode="cover"
                  source={require("../assets/image-48.png")}
                />
                <View style={styles.rectangleView77} />
                <Image
                  style={styles.ellipseIcon26}
                  resizeMode="cover"
                  source={require("../assets/ellipse-61.png")}
                />
              </View>
            </View>
          </View>
          <Text style={styles.inTheBuilderYouCanMakeA}>
            In the Builder, you can make and reuse components. You can also add
            props for dynamic content.
          </Text>
          <View style={styles.groupView125}>
            <Text style={styles.makeComponents}>Make components</Text>
            <View style={styles.groupView124}>
              <Image
                style={styles.ellipseIcon27}
                resizeMode="cover"
                source={require("../assets/ellipse-130.png")}
              />
              <Text style={styles.text40}>2</Text>
            </View>
          </View>
        </View>
        <Text style={styles.youreDoneAfterExportingY}>
          You’re done! After exporting your project, you will be shown the next
          steps to run your project.
        </Text>
        <View style={styles.groupView128}>
          <Text style={styles.runYourProject}>Run your project</Text>
          <View style={styles.groupView127}>
            <Image
              style={styles.ellipseIcon28}
              resizeMode="cover"
              source={require("../assets/ellipse-131.png")}
            />
            <Text style={styles.text41}>5</Text>
          </View>
        </View>
        <View style={styles.groupView131}>
          <Text style={styles.selectViewPrototypeButton}>
            Select “View Prototype” button to preview mode to view a live
            prototype running on code.
          </Text>
          <View style={styles.groupView130}>
            <Text style={styles.previewYourWorkINPROTOTYPE}>
              Preview your work IN PROTOTYPE
            </Text>
            <View style={styles.groupView129}>
              <Image
                style={styles.ellipseIcon29}
                resizeMode="cover"
                source={require("../assets/ellipse-132.png")}
              />
              <Text style={styles.text42}>3</Text>
            </View>
          </View>
          <Image
            style={styles.image50Icon}
            resizeMode="cover"
            source={require("../assets/image-50.png")}
          />
          <Image
            style={styles.groupIcon4}
            resizeMode="cover"
            source={require("../assets/group-7273.png")}
          />
        </View>
        <View style={styles.lineView12} />
        <View style={styles.lineView13} />
        <View style={styles.lineView14} />
        <View style={styles.groupView135}>
          <View style={styles.lineView15} />
          <View style={styles.groupView134}>
            <Text style={styles.onceYouAreSatisfiedWithYo1}>
              <Text style={styles.onceYouAreSatisfiedWithYo}>
                <Text
                  style={styles.onceYouAre}
                >{`Once you are satisfied with your changes, you can finalize your settings before exporting, then at last select export method whether a `}</Text>
                <Text style={styles.zipFile}>Zip file</Text>
                <Text style={styles.or}>{` Or `}</Text>
              </Text>
              <Text style={styles.addToGithub1}>
                <Text style={styles.addToGithub}>Add to Github</Text>
                <Text style={styles.text43}>.</Text>
              </Text>
            </Text>
            <View style={styles.groupView133}>
              <Text style={styles.exportYourProject}>Export your project</Text>
              <View style={styles.groupView132}>
                <Image
                  style={styles.ellipseIcon30}
                  resizeMode="cover"
                  source={require("../assets/ellipse-133.png")}
                />
                <Text style={styles.text44}>4</Text>
              </View>
            </View>
            <Image
              style={styles.image52Icon}
              resizeMode="cover"
              source={require("../assets/image-52.png")}
            />
          </View>
        </View>
        <View style={styles.groupView144}>
          <View style={styles.rectangleView78} />
          <View style={styles.frameView12}>
            <Text style={styles.yourCodeHasBeenExported}>
              Your code has been exported!
            </Text>
            <View style={[styles.group211, styles.mt8_3]}>
              <View style={styles.groupView137}>
                <View style={styles.rectangleView79} />
                <View style={styles.groupView136}>
                  <Text style={styles.screens}>Screens</Text>
                  <Text style={styles.text45}>5</Text>
                  <Image
                    style={styles.group7Icon}
                    resizeMode="cover"
                    source={require("../assets/group7.png")}
                  />
                </View>
              </View>
              <View style={styles.group8Copy}>
                <View style={styles.rectangleCopy4}>
                  <View style={styles.rectangleView80} />
                </View>
                <View style={styles.groupView138}>
                  <Text style={styles.linesOfCode}>Lines of code</Text>
                  <Text style={styles.text46}>3,012</Text>
                  <Image
                    style={styles.group7Icon1}
                    resizeMode="cover"
                    source={require("../assets/group71.png")}
                  />
                </View>
              </View>
              <View style={styles.group8Copy1}>
                <View style={styles.rectangleCopy41}>
                  <View style={styles.rectangleView81} />
                </View>
                <View style={styles.groupView139}>
                  <Image
                    style={styles.assetsIcon}
                    resizeMode="cover"
                    source={require("../assets/assetsicon.png")}
                  />
                  <Text style={styles.totalAssets}>Total assets</Text>
                  <Text style={styles.text47}>150</Text>
                </View>
              </View>
            </View>
            <View style={[styles.lineView16, styles.mt8_3]} />
            <Text style={[styles.recommendedNextSteps, styles.mt8_3]}>
              Recommended next steps:
            </Text>
          </View>
          <View style={styles.frameView24}>
            <Text style={styles.noteMakeSureYouHaveInsta}>
              {`Note: Make sure you have installed native code dependencies `}
              <Text style={styles.here}>here</Text>
            </Text>
            <Text style={[styles.toPreviewAndRunTheProject, styles.mt5_93]}>
              To preview and run the project on your device:
            </Text>
            <View style={[styles.frameView23, styles.mt5_93]}>
              <View style={styles.frameView13}>
                <View style={styles.groupView140}>
                  <Image
                    style={styles.ellipseIcon31}
                    resizeMode="cover"
                    source={require("../assets/ellipse-181.png")}
                  />
                  <Text style={styles.text48}>1</Text>
                </View>
                <Text style={[styles.unzipDownloadedFile, styles.ml5_93]}>
                  Unzip downloaded file
                </Text>
              </View>
              <View style={[styles.frameView14, styles.mt4_74]}>
                <View style={styles.groupView141}>
                  <Image
                    style={styles.ellipseIcon32}
                    resizeMode="cover"
                    source={require("../assets/ellipse-1811.png")}
                  />
                  <Text style={styles.text49}>2</Text>
                </View>
                <Text
                  style={[styles.openProjectFolderInVisual1, styles.ml5_93]}
                >
                  <Text style={styles.openProjectFolderInVisual}>
                    {`Open project folder in `}
                    <Text style={styles.visualStudioCode}>
                      Visual Studio Code
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={[styles.frameView15, styles.mt4_74]}>
                <View style={styles.groupView142}>
                  <Image
                    style={styles.ellipseIcon33}
                    resizeMode="cover"
                    source={require("../assets/ellipse-1812.png")}
                  />
                  <Text style={styles.text50}>3</Text>
                </View>
                <Text style={[styles.runNpmInstallInTheTermina, styles.ml5_93]}>
                  <Text style={styles.run}>
                    {`Run `}
                    <Text style={styles.text51}>{` `}</Text>
                  </Text>
                  <Text style={styles.npmInstall}>npm install</Text>
                  <Text style={styles.inTheTerminal}>
                    <Text style={styles.text52}>{`  `}</Text>in the terminal
                  </Text>
                </Text>
                <View style={[styles.rectangleView82, styles.ml5_93]} />
              </View>
              <View style={[styles.frameView22, styles.mt4_74]}>
                <View style={styles.frameView16}>
                  <View style={styles.groupView143}>
                    <Image
                      style={styles.ellipseIcon34}
                      resizeMode="cover"
                      source={require("../assets/ellipse-1813.png")}
                    />
                    <Text style={styles.text53}>4</Text>
                  </View>
                </View>
                <View style={[styles.frameView21, styles.ml5_93]}>
                  <View style={styles.frameView17}>
                    <Image
                      style={styles.mobileappleIcon}
                      resizeMode="cover"
                      source={require("../assets/mobileapple.png")}
                    />
                    <Text
                      style={[styles.forIOSDeviceOnlyOnMacOS, styles.ml4_74]}
                    >
                      For iOS device (only on MacOS)
                    </Text>
                  </View>
                  <View style={styles.frameView20}>
                    <Text style={styles.aRunCdIosPodInstall1}>
                      <Text style={styles.aRunCdIosPodInstall}>
                        <Text style={styles.aRun}>{`a. Run  `}</Text>
                        <Text
                          style={styles.cdIos}
                        >{`cd ios && pod install && cd ..`}</Text>
                      </Text>
                      <Text style={styles.bThenRunNpxReactNative}>
                        <Text style={styles.bThenRun}>{`b. Then, run  `}</Text>
                        <Text style={styles.npxReactNativeRunIos}>
                          npx react-native run-ios
                        </Text>
                        <Text style={styles.toViewOnIOSSimulatorOr}>
                          <Text style={styles.text54}>{`  `}</Text>
                          {`to view on iOS simulator or `}
                        </Text>
                      </Text>
                      <Text style={styles.followTheInstructionsHereT}>
                        <Text
                          style={styles.followTheInstructions}
                        >{`     follow the instructions `}</Text>
                        <Text style={styles.hereToRunOnPhysicalDevice}>
                          <Text style={styles.here1}>here</Text> to run on
                          physical device
                        </Text>
                      </Text>
                    </Text>
                    <View style={[styles.lineView17, styles.mt5_93]} />
                    <View style={[styles.frameView19, styles.mt5_93]}>
                      <View style={styles.frameView18}>
                        <Image
                          style={styles.mobileandroidIcon}
                          resizeMode="cover"
                          source={require("../assets/mobileandroid.png")}
                        />
                        <Text style={[styles.forAndroidDevice, styles.ml4_74]}>
                          For Android device
                        </Text>
                      </View>
                      <Text style={styles.aUseAndroidVirtualDevice2}>
                        <Text style={styles.aUseAndroidVirtualDevice1}>
                          <Text style={styles.aUseAndroidVirtualDevice}>
                            {`a. Use Android Virtual Device in `}
                            <Text style={styles.androidStudio}>
                              Android Studio
                            </Text>
                            {` or follow the instructions   `}
                          </Text>
                        </Text>
                        <Text style={styles.hereToRunOnPhysicalDevice2}>
                          <Text style={styles.hereToRunOnPhysicalDevice1}>
                            {`    `}
                            <Text style={styles.here2}>here</Text> to run on
                            physical device
                          </Text>
                        </Text>
                        <Text style={styles.bThenRunNpxReactNative1}>
                          <Text style={styles.bThenRun1}>
                            {`b. Then, run `}
                            <Text style={styles.text55}>{` `}</Text>
                          </Text>
                          <Text style={styles.npxReactNativeRunAndroid}>
                            npx react-native run-android
                          </Text>
                        </Text>
                      </Text>
                      <View style={styles.rectangleView83} />
                    </View>
                  </View>
                  <View style={styles.rectangleView84} />
                  <View style={styles.rectangleView85} />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.groupIcon5}
            resizeMode="cover"
            source={require("../assets/group-691.png")}
          />
          <View style={styles.frameView25}>
            <View style={styles.group132}>
              <View style={styles.group5}>
                <Image
                  style={styles.rectangleIcon6}
                  resizeMode="cover"
                  source={require("../assets/rectangle6.png")}
                />
                <View style={styles.group4}>
                  <Text style={styles.ok}>Ok</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.howAreYouEnjoyingTheServi, styles.mt5_93]}>
              <Text style={styles.howAreYou}>
                How are you enjoying the service?
              </Text>
              <Text style={styles.text56}>{` `}</Text>
              <Text style={styles.giveFeedback}>Give feedback</Text>
            </Text>
          </View>
          <Image
            style={styles.groupIcon6}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </View>
      <View style={styles.gettingStartedPreview1}>
        <Text style={styles.selectALayerOrAFrameAnd}>
          <Text
            style={styles.selectALayer}
          >{`Select a layer or a frame, and click the `}</Text>
          <Text style={styles.preview}>Preview</Text>
          <Text style={styles.buttonToSee}>
            {" "}
            button to see an interactive preview of your project.
          </Text>
        </Text>
        <Text style={styles.youCanNowSeeHowYourProje}>
          You can now see how your project behaves in different screen sizes.
          You also have the option to view your project on popular devices.
        </Text>
        <View style={styles.groupView145}>
          <Text style={styles.viewProjectInDifferentScre}>
            View Project in different screen sizes
          </Text>
          <Image
            style={styles.groupIcon7}
            resizeMode="cover"
            source={require("../assets/group-2.png")}
          />
        </View>
        <View style={styles.groupView147}>
          <Text style={styles.youCanAlsoCheckOutTheInt}>
            <Text style={styles.youCanAlso}>
              You can also check out the interactions you have set, since the
              preview is running on live code!
            </Text>
            <Text style={styles.blankLine5}> </Text>
            <Text style={styles.forThisProject}>
              For this project, we’ve helped you to pre-tag other layers, so
              click around to try them out!
            </Text>
          </Text>
          <View style={styles.groupView146}>
            <Text style={styles.tESTOUTTHEINTERACTIONS}>
              TEST OUT THE INTERACTIONS
            </Text>
            <Image
              style={styles.groupIcon8}
              resizeMode="cover"
              source={require("../assets/group-21.png")}
            />
          </View>
        </View>
        <View style={styles.groupView148}>
          <Text style={styles.previewYourProject}>Preview your project</Text>
          <Text style={styles.gettingStarted6}>Getting Started</Text>
        </View>
        <View style={styles.lineView18} />
        <View style={styles.groupView150}>
          <View style={styles.groupView149}>
            <Text style={styles.duringPreviewYourProjectW}>
              During preview, your project will be shown depending on how you
              tagged the layers, tweaked the behaviour and added actions.
              Untagged or untouched layers might not show properly on certain
              screen sizes.
            </Text>
          </View>
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupIcon9}
            resizeMode="cover"
            source={require("../assets/group-25.png")}
          />
        </View>
        <View style={styles.groupView151}>
          <Image
            style={styles.image46Icon}
            resizeMode="cover"
            source={require("../assets/image-46.png")}
          />
          <View style={styles.rectangleView86} />
          <View style={styles.rectangleView87} />
        </View>
        <Image
          style={styles.image54Icon}
          resizeMode="cover"
          source={require("../assets/image-54.png")}
        />
      </View>
      <View style={styles.groupView152}>
        <Image
          style={styles.ellipseIcon35}
          resizeMode="cover"
          source={require("../assets/ellipse-134.png")}
        />
        <Text style={styles.text57}>4</Text>
      </View>
      <View style={styles.groupView153}>
        <Image
          style={styles.ellipseIcon36}
          resizeMode="cover"
          source={require("../assets/ellipse-135.png")}
        />
        <Text style={styles.text58}>5</Text>
      </View>
      <View style={styles.groupView154}>
        <Image
          style={styles.ellipseIcon37}
          resizeMode="cover"
          source={require("../assets/ellipse-135.png")}
        />
        <Text style={styles.text59}>6</Text>
      </View>
      <View style={styles.groupView155}>
        <Text style={styles.tryTaggingTheSearchButton}>
          Try tagging the Search button
        </Text>
        <Image
          style={styles.vectorIcon9}
          resizeMode="cover"
          source={require("../assets/vector-61.png")}
        />
      </View>
      <View style={styles.groupView156}>
        <Text style={styles.tryTaggingThisInput}>Try tagging this input</Text>
        <Image
          style={styles.vectorIcon10}
          resizeMode="cover"
          source={require("../assets/vector-7.png")}
        />
      </View>
      <Image
        style={styles.group3Icon}
        resizeMode="cover"
        source={require("../assets/group35.png")}
      />
      <View style={styles.groupView157}>
        <Text style={styles.selectBottomTabInPlugin}>
          Select “Bottom Tab” in Plugin, and then select all bottom navigation
          in all screens.
        </Text>
        <Image
          style={styles.vectorIcon11}
          resizeMode="cover"
          source={require("../assets/vector-71.png")}
        />
      </View>
      <Image
        style={styles.group3Icon1}
        resizeMode="cover"
        source={require("../assets/group36.png")}
      />
      <Text style={styles.gettingStartedWithLocofy}>
        Getting Started with Locofy
      </Text>
      <Text style={styles.toGetStartedHereIsAQuic}>
        <Text
          style={styles.toGetStarted}
        >{`To get started, here is a quick guide to using the plugin. This is our responsive `}</Text>
        <Text style={styles.fickleFlightMobile}>Fickle Flight Mobile App</Text>
        <Text style={styles.sampleProject}> Sample project.</Text>
      </Text>
      <View style={styles.groupView168}>
        <View style={styles.groupView159}>
          <View style={styles.groupView158}>
            <View style={styles.rectangleView88} />
            <Text style={styles.tagging}>Tagging</Text>
            <Text style={styles.text60}>4</Text>
            <Text style={styles.layers1}>Layers</Text>
          </View>
          <Text style={styles.weveAlreadyPreTagged22Ot}>
            (We’ve already pre-tagged 22 other layers for you)
          </Text>
        </View>
        <View style={styles.groupView161}>
          <View style={styles.groupView160}>
            <View style={styles.rectangleView89} />
            <Text style={styles.editing}>Editing</Text>
            <Text style={styles.text61}>4</Text>
            <Text style={styles.properties2}>Properties</Text>
          </View>
          <Text style={styles.inTheStylingLayoutTabs}>
            <Text style={styles.inTheStyling}>{`In the Styling & `}</Text>
            <Text style={styles.layoutTabs}>Layout tabs</Text>
          </Text>
        </View>
        <View style={styles.groupView163}>
          <View style={styles.groupView162}>
            <View style={styles.rectangleView90} />
            <Text style={styles.adding}>Adding</Text>
            <Text style={styles.text62}>1</Text>
            <Text style={styles.action}>Action</Text>
          </View>
          <Text style={styles.inTheActionsTab}>In the Actions tab</Text>
        </View>
        <View style={styles.groupView165}>
          <View style={styles.groupView164}>
            <View style={styles.rectangleView91} />
            <Text style={styles.gettingLivePreview}>
              <Text style={styles.getting1}>
                <Text style={styles.getting}>Getting</Text>
              </Text>
              <Text style={styles.livePreview1}>
                <Text style={styles.livePreview}>Live preview</Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.groupView167}>
          <View style={styles.groupView166}>
            <View style={styles.rectangleView92} />
            <Text style={styles.exportingCode}>
              <Text style={styles.exporting}>Exporting</Text>
              <Text style={styles.code}> code</Text>
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.inThisGuidedSampleProject}>
        In this guided sample project, you will be:
      </Text>
      <View style={styles.groupView169}>
        <Text style={styles.totalTime10To15Minutes}>
          Total time: 10 to 15 minutes
        </Text>
        <Image
          style={styles.groupIcon10}
          resizeMode="cover"
          source={require("../assets/group-767.png")}
        />
      </View>
      <Image
        style={styles.group2Icon1}
        resizeMode="cover"
        source={require("../assets/group21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchPageBodyContent: {
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 9,
  },
  searchPageBody1Content: {
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 9,
  },
  mt6_38: {
    marginTop: 6.38,
  },
  ml4_56: {
    marginLeft: 4.56,
  },
  mt9_69: {
    marginTop: 9.69,
  },
  ml6_92: {
    marginLeft: 6.92,
  },
  mt1_32: {
    marginTop: 1.32,
  },
  header: {
    backgroundColor: "#fff",
  },
  mt1_98: {
    marginTop: 1.98,
  },
  ml5_95: {
    marginLeft: 5.95,
  },
  ml2_65: {
    marginLeft: 2.65,
  },
  ml1_32: {
    marginLeft: 1.32,
  },
  mt4_63: {
    marginTop: 4.63,
  },
  mt5_62: {
    marginTop: 5.62,
  },
  bookingsBodyScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  ml3_31: {
    marginLeft: 3.31,
  },
  mt72_14: {
    marginTop: 72.14,
  },
  mt8_3: {
    marginTop: 8.3,
  },
  ml5_93: {
    marginLeft: 5.93,
  },
  ml4_74: {
    marginLeft: 4.74,
  },
  mt5_93: {
    marginTop: 5.93,
  },
  mt4_74: {
    marginTop: 4.74,
  },
  tryTaggingThisScreenAsThe: {
    position: "absolute",
    top: 0,
    left: 5,
    fontSize: 74,
    letterSpacing: -3,
    lineHeight: 90,
    fontFamily: "Just Me Again Down Here",
    color: "#457eff",
    textAlign: "center",
    width: 921,
    transform: [
      {
        rotate: "2.97deg",
      },
    ],
  },
  vectorIcon: {
    position: "absolute",
    top: 128,
    left: 33,
    width: 106,
    height: 82,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 924,
    height: 203,
  },
  group2Icon: {
    position: "absolute",
    height: "78.79%",
    width: "18.31%",
    top: "3.45%",
    right: "0%",
    bottom: "17.76%",
    left: "81.69%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView1: {
    position: "absolute",
    top: 2110,
    left: 1372,
    width: 1172,
    height: 203,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#fff",
    width: 1786,
    height: 560,
  },
  locofyLogo1: {
    position: "absolute",
    top: 71,
    left: 56,
    width: 383,
    height: 115,
  },
  group9Icon: {
    position: "absolute",
    height: "26.47%",
    width: "8.69%",
    top: "9.39%",
    right: "46.6%",
    bottom: "64.15%",
    left: "44.71%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.6,
  },
  group9Icon1: {
    position: "absolute",
    height: "30.03%",
    width: "9.86%",
    top: "66.15%",
    right: "23.11%",
    bottom: "3.82%",
    left: "67.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.6,
  },
  import: {
    color: "#6967da",
  },
  react: {
    color: "#40495e",
  },
  from: {
    color: "#6967da",
  },
  text: {
    color: "#40495e",
  },
  react1: {
    color: "#4fc786",
  },
  text1: {
    color: "#40495e",
  },
  importReactFromReact: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  import1: {
    color: "#6967da",
  },
  appHeader: {
    color: "#40495e",
  },
  from1: {
    color: "#6967da",
  },
  text2: {
    color: "#40495e",
  },
  appHeader1: {
    color: "#4fc786",
  },
  importAppHeaderFromA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  import2: {
    color: "#6967da",
  },
  footer: {
    color: "#40495e",
  },
  from2: {
    color: "#6967da",
  },
  text3: {
    color: "#40495e",
  },
  footer1: {
    color: "#4fc786",
  },
  importFooterFromFoot: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  import3: {
    color: "#6967da",
  },
  text4: {
    color: "#40495e",
  },
  homeUicss: {
    color: "#4fc786",
  },
  text5: {
    color: "#40495e",
  },
  importHomeUicss: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine: {
    color: "#40495e",
  },
  blankLine1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  type: {
    color: "#40495e",
  },
  homeUIProps: {
    color: "#f4596c",
  },
  text6: {
    color: "#40495e",
  },
  typeHomeUIProps: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  header1: {
    color: "#40495e",
  },
  headerProps: {
    color: "#f4596c",
  },
  text7: {
    color: "#40495e",
  },
  headerHeaderProps: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text8: {
    color: "#40495e",
  },
  text9: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine2: {
    color: "#40495e",
  },
  blankLine3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  export: {
    color: "#6967da",
  },
  const: {
    color: "#40495e",
  },
  homeUI: {
    color: "#f4596c",
  },
  text10: {
    color: "#40495e",
  },
  reactFunctionComponent: {
    color: "#f4596c",
  },
  text11: {
    color: "#40495e",
  },
  homeUIProps1: {
    color: "#f4596c",
  },
  reactmemo: {
    color: "#40495e",
  },
  exportConstHomeUIReactFun: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  header2: {
    color: "#6967da",
  },
  header3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  return: {
    color: "#6967da",
  },
  return1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  divClass: {
    color: "#6967da",
  },
  homeUiRoot: {
    color: "#4fc786",
  },
  divClasshomeUiRoot: {
    margin: 0,
  },
  importReactFromContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  importReactFromReactImp: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "600",
    fontFamily: "Source Code Pro",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 763,
    height: 349,
    opacity: 0.8,
  },
  groupView2: {
    position: "absolute",
    top: -157,
    left: 998,
    width: 763,
    height: 349,
    opacity: 0.2,
  },
  pluginMockupIcon: {
    position: "absolute",
    height: "145.55%",
    width: "22.24%",
    top: "20.98%",
    right: "-2.14%",
    bottom: "-66.53%",
    left: "79.9%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.7,
  },
  getLocofyPlugin: {
    position: "absolute",
    top: 4,
    left: 84,
    fontSize: 39,
    textDecoration: "underline",
    lineHeight: 57,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "left",
  },
  iconPlugin: {
    position: "absolute",
    height: "100%",
    width: "16.54%",
    top: "0%",
    right: "83.46%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 391,
    height: 65,
  },
  watchDemo: {
    position: "absolute",
    top: 4,
    left: 84,
    fontSize: 39,
    textDecoration: "underline",
    lineHeight: 57,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "left",
  },
  videoIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 65,
    height: 65,
    overflow: "hidden",
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 455,
    width: 302,
    height: 65,
  },
  guides: {
    position: "absolute",
    top: 0,
    left: 84,
    fontSize: 39,
    textDecoration: "underline",
    lineHeight: 57,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "left",
  },
  books1Icon: {
    position: "absolute",
    height: "90.8%",
    width: "31.37%",
    top: "5.15%",
    right: "68.63%",
    bottom: "4.05%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView5: {
    position: "absolute",
    top: 4,
    left: 822,
    width: 206,
    height: 57,
  },
  groupView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1028,
    height: 65,
  },
  groupView7: {
    position: "absolute",
    top: 435,
    left: 56,
    width: 1028,
    height: 65,
  },
  shipProducts4X: {
    fontFamily: "Roboto",
  },
  figmaDesigns: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  to: {
    fontFamily: "Roboto",
  },
  reactNativeCode: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text12: {
    fontFamily: "Roboto",
  },
  shipProducts4XFasterConv: {
    position: "absolute",
    top: 314,
    left: 56,
    fontSize: 46,
    lineHeight: 60,
    color: "#485269",
    textAlign: "left",
    width: 1514,
  },
  turnYourDesignsIntoProduct: {
    position: "absolute",
    top: 226,
    left: 56,
    fontSize: 60,
    lineHeight: 71,
    fontWeight: "700",
    fontFamily: "Alegreya",
    color: "#485269",
    textAlign: "left",
    width: 1515,
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1786,
    height: 560,
  },
  guideGuyIcon: {
    position: "absolute",
    marginLeft: 616.41,
    top: 402,
    left: "50%",
    width: 269,
    height: 246,
  },
  instructions: {
    position: "absolute",
    top: 0,
    left: 64,
    width: 1786,
    height: 648,
  },
  taggingOther: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  layers: {
    margin: 0,
  },
  taggingOtherLayers: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  gettingStarted: {
    position: "absolute",
    top: 0,
    left: 3,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView9: {
    position: "absolute",
    top: 42,
    left: 60,
    width: 434,
    height: 195,
  },
  tagALayerAndFurtherCustom: {
    position: "absolute",
    top: 273,
    left: 60,
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 474,
  },
  selectTheSelect: {
    fontFamily: "Roboto",
  },
  textInput: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text13: {
    fontFamily: "Roboto",
  },
  selectTheSelectDeparture: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  selectTheLAYER: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text14: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView10: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 220,
    height: 28,
  },
  groupView12: {
    position: "absolute",
    top: 2042,
    left: 60,
    width: 445,
    height: 98,
  },
  nowLetsChoose: {
    fontFamily: "Roboto",
  },
  outlinedInput: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text15: {
    fontFamily: "Roboto",
  },
  nowLetsChooseTheVariatio: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  chooseVariation: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text16: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView13: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 229,
    height: 28,
  },
  groupView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 445,
    height: 103,
  },
  groupView16: {
    position: "absolute",
    top: 2306,
    left: 60,
    width: 445,
    height: 103,
  },
  goToProperties: {
    fontFamily: "Roboto",
  },
  goToPropertiesTabSetLeft: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  airplaneTakeoff: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  inTheLeft: {
    fontFamily: "Roboto",
  },
  airplaneTakeoffInTheLeftI: {
    margin: 0,
  },
  goToPropertiesTabSetLeft1: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 455,
  },
  addProperties: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text17: {
    position: "absolute",
    top: 4,
    left: 7,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "center",
    width: 9,
    height: 18,
  },
  groupView17: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView18: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 205,
    height: 28,
  },
  groupView19: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 497,
    height: 103,
  },
  groupView20: {
    position: "absolute",
    top: 2645,
    left: 60,
    width: 497,
    height: 103,
  },
  goToStyling: {
    fontFamily: "Roboto",
  },
  outlineColorTo: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  dCDEDF: {
    fontFamily: "Roboto",
  },
  goToStylingTabSetOutline: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  andSet: {
    fontFamily: "Roboto",
  },
  activeOutlineColor: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  to7F7F7F: {
    fontFamily: "Roboto",
  },
  andSetActiveOutlineColorT: {
    margin: 0,
  },
  goToStylingTabSetOutline1: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 427,
  },
  addStyles: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text18: {
    position: "absolute",
    top: 4,
    left: 7,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "center",
    width: 9,
    height: 18,
  },
  groupView21: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView22: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 159,
    height: 28,
  },
  groupView23: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 469,
    height: 103,
  },
  groupView24: {
    position: "absolute",
    top: 2908,
    left: 60,
    width: 469,
    height: 103,
  },
  outlinedTextOnlyNoIcon: {
    position: "relative",
    width: 175,
    height: 31,
    flexShrink: 0,
  },
  form: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  roundTripSection: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightSelection: {
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 1.1200000047683716,
    },
    shadowRadius: 8.4,
    elevation: 8.4,
    shadowOpacity: 1,
    width: 191,
    height: 56,
    flexShrink: 0,
    flexDirection: "column",
    padding: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchPageBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  search: {
    position: "absolute",
    top: 3,
    left: 0,
    backgroundColor: "#f8f9fb",
    width: 210,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView1: {
    position: "absolute",
    top: 3,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 200,
    height: 64,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView5: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView25: {
    position: "absolute",
    top: 5,
    left: 3,
    width: 204,
    height: 68,
  },
  rectangleIcon: {
    position: "absolute",
    height: "102%",
    width: "101.64%",
    top: "-1%",
    right: "-0.82%",
    bottom: "-1%",
    left: "-0.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  image: {
    position: "absolute",
    width: "100%",
    top: "64.14%",
    left: "0%",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blockTextInputIcon: {
    position: "absolute",
    height: "47.26%",
    width: "26.42%",
    top: "0%",
    right: "37.74%",
    bottom: "52.74%",
    left: "35.85%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  group: {
    position: "absolute",
    height: "59.25%",
    width: "86.89%",
    top: "20%",
    right: "6.56%",
    bottom: "20.75%",
    left: "6.56%",
  },
  tagsshort: {
    position: "absolute",
    height: "100%",
    width: "25.68%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "74.32%",
  },
  ellipseIcon4: {
    position: "absolute",
    width: "4.65%",
    top: 34,
    right: "23.41%",
    left: "71.95%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 18,
  },
  vectorIcon1: {
    position: "absolute",
    top: 43,
    left: 205,
    width: 78,
    height: 1,
  },
  groupView26: {
    position: "absolute",
    top: 2162,
    left: 102,
    width: 380,
    height: 80,
  },
  lineView: {
    position: "absolute",
    top: 2274,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  lineView1: {
    position: "absolute",
    top: 2613,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  lineView2: {
    position: "absolute",
    top: 2876,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  artboardCopy14FontCopyIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  chooseAVariation: {
    position: "absolute",
    marginTop: -67.5,
    top: "50%",
    left: 10,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  image8Icon: {
    position: "absolute",
    top: 43,
    left: 8,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    width: 163,
    height: 25,
  },
  reactNativePaper: {
    position: "absolute",
    top: 2,
    left: 22,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  image4Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 2,
    width: 17,
    height: 17,
  },
  groupView27: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 108,
    height: 17,
  },
  groupView28: {
    position: "absolute",
    top: 8,
    left: 8,
    width: 108,
    height: 17,
  },
  lineView3: {
    position: "absolute",
    top: 32,
    left: 0,
    borderStyle: "solid",
    borderColor: "rgba(225, 229, 236, 0.7)",
    borderTopWidth: 0.7,
    width: 267,
    height: 1,
  },
  image9Icon: {
    position: "absolute",
    top: 75,
    left: 8,
    borderRadius: 2,
    width: 163,
    height: 29,
  },
  groupView29: {
    position: "absolute",
    height: "73.01%",
    width: "93.01%",
    top: "20.43%",
    right: "3.5%",
    bottom: "6.56%",
    left: "3.5%",
  },
  figmaPlugin291: {
    position: "absolute",
    top: 2426,
    left: 102,
    width: 286,
    height: 155,
    overflow: "hidden",
  },
  artboardCopy14FontCopyIcon1: {
    position: "absolute",
    height: "1000%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-900%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  source: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  vectorIcon2: {
    position: "absolute",
    top: 12,
    right: 8,
    width: 5,
    height: 3,
    display: "none",
  },
  select: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  select1: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
    display: "none",
  },
  crossIcon: {
    position: "absolute",
    top: 11,
    right: 8,
    width: 5,
    height: 5,
    display: "none",
  },
  frameView: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f3f6fc",
    height: 26,
  },
  fields: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 128,
    height: 47,
  },
  source1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  vectorIcon3: {
    position: "absolute",
    top: 12,
    right: 8,
    width: 5,
    height: 3,
    display: "none",
  },
  select2: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  select3: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
    display: "none",
  },
  crossIcon1: {
    position: "absolute",
    top: 11,
    right: 8,
    width: 5,
    height: 5,
    display: "none",
  },
  frameView1: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f3f6fc",
    height: 26,
  },
  fields1: {
    position: "absolute",
    top: 0,
    left: 138,
    width: 128,
    height: 47,
  },
  groupView30: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 266,
    height: 47,
  },
  figmaPlugin206: {
    position: "absolute",
    top: 2770,
    left: 102,
    width: 286,
    height: 74,
    overflow: "hidden",
  },
  basic: {
    position: "absolute",
    top: "25%",
    left: "3.5%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  component3: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(204, 211, 228, 0.19)",
    width: 286,
    height: 26,
  },
  text19: {
    color: "#b5bccc",
  },
  dCDEDF1: {
    color: "#3f4c5a",
  },
  dCDEDF2: {
    position: "absolute",
    top: 1,
    left: 31,
    fontSize: 10,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  text20: {
    position: "absolute",
    top: 1,
    left: 80,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 21,
    height: 14,
  },
  select4: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "right",
  },
  addRectangularCopy30Icon: {
    position: "absolute",
    height: "62.86%",
    width: "6.11%",
    top: "16.67%",
    right: "93.89%",
    bottom: "20.47%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView31: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 131,
    height: 12,
  },
  groupView32: {
    position: "absolute",
    top: 29,
    right: 0,
    width: 131,
    height: 12,
  },
  groupView33: {
    position: "absolute",
    top: 42,
    left: 10,
    width: 131,
    height: 41,
  },
  groupView34: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 286,
    height: 83,
  },
  basic1: {
    position: "absolute",
    top: "25%",
    left: "3.5%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  component31: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(204, 211, 228, 0.19)",
    width: 286,
    height: 26,
  },
  text21: {
    color: "#b5bccc",
  },
  f7F7F: {
    color: "#3f4c5a",
  },
  f7F7F1: {
    position: "absolute",
    top: 1,
    left: 31,
    fontSize: 10,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  text22: {
    position: "absolute",
    top: 1,
    left: 80,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 21,
    height: 14,
  },
  select5: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "right",
  },
  addRectangularCopy30Icon1: {
    position: "absolute",
    height: "62.86%",
    width: "6.11%",
    top: "16.67%",
    right: "93.89%",
    bottom: "20.47%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView35: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 131,
    height: 12,
  },
  groupView36: {
    position: "absolute",
    top: 29,
    right: 0,
    width: 131,
    height: 12,
  },
  groupView37: {
    position: "absolute",
    top: 42,
    left: 10,
    width: 131,
    height: 41,
  },
  groupView38: {
    position: "absolute",
    top: 99,
    left: 0,
    width: 286,
    height: 83,
  },
  figmaPlugin294: {
    position: "absolute",
    top: 3033,
    left: 102,
    backgroundColor: "#fff",
    width: 286,
    height: 200,
    overflow: "hidden",
  },
  selectTheSearch: {
    fontFamily: "Roboto",
  },
  button: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  inTheOther: {
    fontFamily: "Roboto",
  },
  selectTheSearchButtonOn: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  tagAsButton: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text23: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView39: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView40: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 195,
    height: 28,
  },
  groupView41: {
    position: "absolute",
    top: 452,
    left: 60,
    width: 445,
    height: 130,
  },
  taggingAButton: {
    position: "absolute",
    top: 385,
    left: 60,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 488,
  },
  taggingATextINPUT: {
    position: "absolute",
    top: 1959,
    left: 60,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 488,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#f8f9fb",
    width: 210,
    height: 69,
  },
  viewDetails: {
    position: "relative",
    fontSize: 8,
    lineHeight: 13,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 67,
  },
  buttonPrimary: {
    borderRadius: 3,
    backgroundColor: "#f99a0e",
    width: 175,
    flexDirection: "row",
    paddingHorizontal: 11,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  oneWaySection: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightSelection1: {
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 1.118485689163208,
    },
    shadowRadius: 8.39,
    elevation: 8.39,
    shadowOpacity: 1,
    width: 191,
    flexDirection: "column",
    padding: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchPageBody1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    width: 210,
    flex: 1,
    maxWidth: 210,
  },
  groupView42: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 210,
    height: 70,
  },
  groupView43: {
    position: "absolute",
    top: 5,
    left: 0,
    width: 210,
    height: 70,
  },
  buttonIcon: {
    position: "absolute",
    width: "38.28%",
    top: -28,
    right: "-6.85%",
    left: "68.57%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 135,
  },
  groupIcon: {
    position: "absolute",
    width: "4.38%",
    top: 31,
    right: "22.39%",
    left: "73.23%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 18,
  },
  rectangleView7: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 182,
    height: 32,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView9: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView11: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView44: {
    position: "absolute",
    top: 22,
    left: 12,
    width: 186,
    height: 35,
  },
  vectorIcon4: {
    position: "absolute",
    top: 41,
    left: 196,
    width: 108,
    height: 1,
  },
  groupView45: {
    position: "absolute",
    top: 618,
    left: 102,
    width: 403,
    height: 80,
  },
  fromLayoutTab: {
    fontFamily: "Roboto",
  },
  alignCenter: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  toAlignButton: {
    fontFamily: "Roboto",
  },
  fromLayoutTabSelectAlignC: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  editButtonLayout: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text24: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView46: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView47: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 247,
    height: 28,
  },
  groupView48: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 445,
    height: 103,
  },
  groupView49: {
    position: "absolute",
    top: 752,
    left: 60,
    width: 445,
    height: 103,
  },
  youCanAdd: {
    fontFamily: "Roboto",
  },
  press: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  fromChooseTrigger: {
    fontFamily: "Roboto",
  },
  pageChange: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  fromChooseAction: {
    fontFamily: "Roboto",
  },
  searchResult: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  page: {
    fontFamily: "Roboto",
  },
  youCanAddActionForYourBu: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  fromChoosePage: {
    fontFamily: "Roboto",
  },
  fromChoosePage1: {
    margin: 0,
  },
  youCanAddActionForYourBu1: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 433,
  },
  addActions: {
    position: "absolute",
    top: 0,
    left: 39,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
    width: 406,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 22,
    height: 24,
  },
  text25: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 8,
    height: 18,
  },
  groupView50: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 22,
    height: 24,
  },
  groupView51: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 445,
    height: 28,
  },
  groupView52: {
    position: "absolute",
    top: 1178,
    left: 60,
    width: 475,
    height: 162,
  },
  lineView4: {
    position: "absolute",
    top: 719,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  lineView5: {
    position: "absolute",
    top: 1145,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 286,
    height: 237,
  },
  basic2: {
    position: "absolute",
    top: "25%",
    left: "3.5%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  component32: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(204, 211, 228, 0.19)",
    width: 286,
    height: 26,
  },
  direction: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  group295Icon: {
    position: "absolute",
    height: "100%",
    width: "14.84%",
    top: "0%",
    right: "23.09%",
    bottom: "0%",
    left: "62.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  group75Icon: {
    position: "absolute",
    height: "100%",
    width: "14.84%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "85.16%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView53: {
    position: "absolute",
    top: 37,
    left: 10,
    width: 121,
    height: 18,
  },
  group295Icon1: {
    position: "absolute",
    width: "3.5%",
    top: "40.76%",
    right: "65.25%",
    left: "31.26%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 0,
  },
  align: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  groupIcon1: {
    position: "absolute",
    height: "100%",
    width: "63.33%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "36.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView54: {
    position: "absolute",
    top: 65,
    left: 10,
    width: 205,
    height: 18,
  },
  justify: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  groupIcon2: {
    position: "absolute",
    height: "100%",
    width: "67.73%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "32.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView55: {
    position: "absolute",
    top: 93,
    left: 10,
    width: 233,
    height: 18,
  },
  wrapContent: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  noWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  path14Icon: {
    position: "absolute",
    top: 5,
    left: 46,
    width: 4,
    height: 2,
  },
  groupView56: {
    position: "absolute",
    top: 0,
    left: 75,
    width: 49,
    height: 12,
  },
  groupView57: {
    position: "absolute",
    top: 121,
    left: 10,
    width: 124,
    height: 12,
  },
  spacing: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  text26: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  groupView58: {
    position: "absolute",
    top: 0,
    left: 75,
    width: 12,
    height: 12,
  },
  groupView59: {
    position: "absolute",
    top: 143,
    left: 10,
    width: 87,
    height: 12,
  },
  removeAutolayout: {
    position: "absolute",
    top: 0,
    left: 12,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "left",
  },
  smallIconscross: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 10,
    height: 10,
  },
  groupView60: {
    position: "absolute",
    top: 165,
    left: 10,
    width: 99,
    height: 12,
  },
  groupView61: {
    position: "absolute",
    top: 50,
    left: 0,
    width: 286,
    height: 177,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 105,
    left: 123,
    width: 18,
    height: 18,
  },
  rectangleView13: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  rectangleView14: {
    position: "absolute",
    height: "100%",
    width: "24.48%",
    top: "0%",
    right: "50.52%",
    bottom: "0%",
    left: "25%",
    backgroundColor: "#ecf0f6",
    opacity: 0.36,
  },
  lineCopy4Icon: {
    position: "absolute",
    height: "1.4%",
    width: "100%",
    top: "98.62%",
    right: "0%",
    bottom: "-0.02%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineCopy4Icon1: {
    position: "absolute",
    height: "1.4%",
    width: "24.48%",
    top: "98.62%",
    right: "50.53%",
    bottom: "-0.02%",
    left: "25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  properties: {
    position: "absolute",
    top: "60%",
    left: "3.15%",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#bac2d6",
    textAlign: "left",
  },
  tabsIconsettings: {
    position: "absolute",
    height: "28%",
    width: "4.9%",
    top: "20%",
    right: "85.31%",
    bottom: "52%",
    left: "9.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  layout: {
    position: "absolute",
    top: "60%",
    left: "31.29%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "left",
  },
  styling: {
    position: "absolute",
    top: "60%",
    left: "56.82%",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#bac2d6",
    textAlign: "left",
  },
  actions: {
    position: "absolute",
    top: "60%",
    left: "81.12%",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#bac2d6",
    textAlign: "left",
  },
  rectangleView15: {
    position: "absolute",
    height: "30%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "70%",
    left: "0%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#457eff",
    borderWidth: 0.7,
  },
  rectangleView16: {
    position: "absolute",
    height: "65%",
    width: "40%",
    top: "35%",
    right: "60%",
    bottom: "0%",
    left: "0%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#457eff",
    borderWidth: 0.7,
  },
  rectangleView17: {
    position: "absolute",
    height: "30%",
    width: "55%",
    top: "35%",
    right: "0%",
    bottom: "35%",
    left: "45%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#457eff",
    borderWidth: 0.7,
  },
  rectangleView18: {
    position: "absolute",
    height: "30%",
    width: "55%",
    top: "70%",
    right: "0%",
    bottom: "0%",
    left: "45%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#457eff",
    borderWidth: 0.7,
  },
  tabsIconlayout: {
    position: "absolute",
    height: "28%",
    width: "4.9%",
    top: "20%",
    right: "60.31%",
    bottom: "52%",
    left: "34.79%",
  },
  tabsIconstyle: {
    position: "absolute",
    height: "28.19%",
    width: "5%",
    top: "19.81%",
    right: "34.96%",
    bottom: "52%",
    left: "60.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tabsIconactions: {
    position: "absolute",
    height: "28%",
    width: "4.9%",
    top: "20%",
    right: "9.79%",
    bottom: "52%",
    left: "85.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tablayout: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 286,
    height: 50,
  },
  groupView62: {
    position: "absolute",
    top: 877,
    left: 102,
    width: 286,
    height: 237,
  },
  basic3: {
    position: "absolute",
    top: "25%",
    left: "3.5%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  component33: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(204, 211, 228, 0.19)",
    width: 286,
    height: 26,
  },
  source2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  vectorIcon5: {
    position: "absolute",
    top: 12,
    right: 8,
    width: 5,
    height: 3,
  },
  select6: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  select7: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
    display: "none",
  },
  crossIcon2: {
    position: "absolute",
    top: 11,
    right: 8,
    width: 5,
    height: 5,
    display: "none",
  },
  frameView2: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f3f6fc",
    height: 26,
  },
  fields2: {
    position: "absolute",
    top: 42,
    left: 10,
    width: 266,
    height: 47,
  },
  groupView63: {
    position: "absolute",
    top: 50,
    left: 0,
    width: 286,
    height: 89,
  },
  basic4: {
    position: "absolute",
    top: "25%",
    left: "3.5%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  component34: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(204, 211, 228, 0.19)",
    width: 286,
    height: 26,
  },
  source3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  vectorIcon6: {
    position: "absolute",
    top: 12,
    right: 8,
    width: 5,
    height: 3,
  },
  select8: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  select9: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
    display: "none",
  },
  crossIcon3: {
    position: "absolute",
    top: 11,
    right: 8,
    width: 5,
    height: 5,
    display: "none",
  },
  frameView3: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f3f6fc",
    height: 26,
  },
  fields3: {
    position: "absolute",
    top: 42,
    left: 10,
    width: 266,
    height: 47,
  },
  source4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
  },
  vectorIcon7: {
    position: "absolute",
    top: 12,
    right: 8,
    width: 5,
    height: 3,
  },
  select10: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#b5bccc",
    textAlign: "left",
  },
  select11: {
    position: "absolute",
    top: 7,
    left: 8,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "left",
    display: "none",
  },
  crossIcon4: {
    position: "absolute",
    top: 11,
    right: 8,
    width: 5,
    height: 5,
    display: "none",
  },
  frameView4: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#f3f6fc",
    height: 26,
  },
  fields4: {
    position: "absolute",
    top: 101,
    left: 10,
    width: 266,
    height: 47,
  },
  groupView64: {
    position: "absolute",
    top: 155,
    left: 0,
    width: 286,
    height: 148,
  },
  rectangleView19: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  rectangleView20: {
    position: "absolute",
    height: "100%",
    width: "24.48%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "75.52%",
    backgroundColor: "#ecf0f6",
    opacity: 0.36,
  },
  lineCopy4Icon2: {
    position: "absolute",
    height: "1.4%",
    width: "100%",
    top: "98.62%",
    right: "0%",
    bottom: "-0.02%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineCopy4Icon3: {
    position: "absolute",
    height: "1.4%",
    width: "24.48%",
    top: "98.62%",
    right: "0.03%",
    bottom: "-0.02%",
    left: "75.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  properties1: {
    position: "absolute",
    top: "60%",
    left: "3.15%",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#bac2d6",
    textAlign: "left",
  },
  tabsIconsettings1: {
    position: "absolute",
    height: "28%",
    width: "4.9%",
    top: "20%",
    right: "85.31%",
    bottom: "52%",
    left: "9.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  layout1: {
    position: "absolute",
    top: "60%",
    left: "30.77%",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#bac2d6",
    textAlign: "left",
  },
  styling1: {
    position: "absolute",
    top: "60%",
    left: "56.82%",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#bac2d6",
    textAlign: "left",
  },
  actions1: {
    position: "absolute",
    top: "60%",
    left: "81.12%",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "left",
  },
  rectangleView21: {
    position: "absolute",
    height: "30%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "70%",
    left: "0%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderWidth: 0.7,
  },
  rectangleView22: {
    position: "absolute",
    height: "65%",
    width: "40%",
    top: "35%",
    right: "60%",
    bottom: "0%",
    left: "0%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderWidth: 0.7,
  },
  rectangleView23: {
    position: "absolute",
    height: "30%",
    width: "55%",
    top: "35%",
    right: "0%",
    bottom: "35%",
    left: "45%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderWidth: 0.7,
  },
  rectangleView24: {
    position: "absolute",
    height: "30%",
    width: "55%",
    top: "70%",
    right: "0%",
    bottom: "0%",
    left: "45%",
    borderRadius: 1,
    backgroundColor: "#f3f7ff",
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderWidth: 0.7,
  },
  tabsIconlayout1: {
    position: "absolute",
    height: "28%",
    width: "4.9%",
    top: "20%",
    right: "60.84%",
    bottom: "52%",
    left: "34.27%",
  },
  tabsIconstyle1: {
    position: "absolute",
    height: "28.19%",
    width: "5%",
    top: "19.81%",
    right: "34.96%",
    bottom: "52%",
    left: "60.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tabsIconactions1: {
    position: "absolute",
    height: "28%",
    width: "4.9%",
    top: "20%",
    right: "9.79%",
    bottom: "52%",
    left: "85.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tabactions: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 286,
    height: 50,
  },
  figmaPlugin184: {
    position: "absolute",
    top: 1362,
    left: 102,
    backgroundColor: "#fff",
    width: 286,
    height: 318,
    overflow: "hidden",
  },
  gettingStartedTaggingOthe: {
    position: "absolute",
    top: 3664,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 3385,
    overflow: "hidden",
  },
  image36Icon: {
    position: "absolute",
    top: 1894,
    left: 102,
    width: 285,
    height: 146,
  },
  settingUp: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  tabNavigation: {
    margin: 0,
  },
  settingUpTabNavigation: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  gettingStarted1: {
    position: "absolute",
    top: 0,
    left: 3,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView65: {
    position: "absolute",
    top: 42,
    left: 60,
    width: 427,
    height: 195,
  },
  nextSetUpBottomTabNaviga: {
    position: "absolute",
    top: 275,
    left: 60,
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 474,
  },
  firstEnsureThat: {
    fontFamily: "Roboto",
  },
  bottomTab: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  inThePlugin: {
    fontFamily: "Roboto",
  },
  firstEnsureThatYouHaveNo: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 453,
  },
  tagBottomTab: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text27: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView66: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView67: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 210,
    height: 28,
  },
  groupView68: {
    position: "absolute",
    top: 442,
    left: 60,
    width: 495,
    height: 98,
  },
  selectAllBottom: {
    fontFamily: "Roboto",
  },
  selectAllBottomTabsFromAl: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  click: {
    fontFamily: "Roboto",
  },
  done: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  toSave: {
    fontFamily: "Roboto",
  },
  clickDoneToSave: {
    margin: 0,
  },
  selectAllBottomTabsFromAl1: {
    position: "absolute",
    top: 660,
    left: 102,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
  },
  clickOn: {
    fontFamily: "Roboto",
  },
  locate: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  inThe: {
    fontFamily: "Roboto",
  },
  activeColumn: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  for: {
    fontFamily: "Roboto",
  },
  text28: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  whichIsThe: {
    fontFamily: "Roboto",
  },
  clickOnLocateInTheActive: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  sETUPACTIVESTATE: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text29: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView69: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView70: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 247,
    height: 28,
  },
  groupView71: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 445,
    height: 103,
  },
  groupView72: {
    position: "absolute",
    top: 1224,
    left: 60,
    width: 445,
    height: 103,
  },
  clickOn1: {
    fontFamily: "Roboto",
  },
  locate1: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  inThe1: {
    fontFamily: "Roboto",
  },
  contentColumn: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  for1: {
    fontFamily: "Roboto",
  },
  text30: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  whichIsThe1: {
    fontFamily: "Roboto",
  },
  clickOnLocateInTheContent: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  sETUPContent: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text31: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView73: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView74: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 205,
    height: 28,
  },
  groupView75: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 445,
    height: 103,
  },
  groupView76: {
    position: "absolute",
    top: 1769,
    left: 60,
    width: 445,
    height: 103,
  },
  useTheSameProcessAboveTo: {
    position: "absolute",
    top: 39,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  sETUPOtherTabs: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text32: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView77: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView78: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 232,
    height: 28,
  },
  groupView79: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 445,
    height: 135,
  },
  groupView80: {
    position: "absolute",
    top: 2513,
    left: 60,
    width: 445,
    height: 135,
  },
  youWillBeAskedToLocateTh: {
    position: "absolute",
    top: 1530,
    left: 102,
    fontSize: 20,
    lineHeight: 32,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 433,
  },
  youWillBe: {
    fontFamily: "Roboto",
  },
  contentrespectiveScreen: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  forThatTab: {
    fontFamily: "Roboto",
  },
  youWillBeAskedToLocateTh1: {
    position: "absolute",
    top: 2075,
    left: 102,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 450,
  },
  lineView6: {
    position: "absolute",
    top: 1192,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  lineView7: {
    position: "absolute",
    top: 1737,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  lineView8: {
    position: "absolute",
    top: 2481,
    left: 60,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 476,
    height: 1,
    opacity: 0.5,
  },
  rectangleIcon4: {
    position: "absolute",
    height: "101.79%",
    width: "101.64%",
    top: "-0.89%",
    right: "-0.82%",
    bottom: "-0.89%",
    left: "-0.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bottom: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  tabs: {
    margin: 0,
  },
  splashScreenTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  splashScreen: {
    position: "absolute",
    width: "100%",
    top: "46.15%",
    left: "0%",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  blockbottomtabsIcon: {
    position: "absolute",
    height: "35.9%",
    width: "26.42%",
    top: "0%",
    right: "37.74%",
    bottom: "64.1%",
    left: "35.85%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  group1: {
    position: "absolute",
    height: "69.64%",
    width: "86.89%",
    top: "14.29%",
    right: "6.56%",
    bottom: "16.07%",
    left: "6.56%",
  },
  tickIcon: {
    position: "absolute",
    height: "17.86%",
    width: "16.39%",
    top: "6.56%",
    right: "76.38%",
    bottom: "75.59%",
    left: "7.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  tagsdefault: {
    position: "absolute",
    height: "2.92%",
    width: "14.65%",
    top: "20.39%",
    right: "68.21%",
    bottom: "76.68%",
    left: "17.14%",
  },
  iconExploreSelected: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search1: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search2: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search3: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search4: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search5: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab5: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab6: {
    position: "absolute",
    top: 7,
    left: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0.9120000004768372,
    },
    shadowRadius: 6.84,
    elevation: 6.84,
    shadowOpacity: 1,
    width: 171,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView25: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 181,
    height: 47,
  },
  rectangleView26: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView27: {
    position: "absolute",
    bottom: 1,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView28: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView29: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView81: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 185,
    height: 51,
  },
  groupView82: {
    position: "absolute",
    top: 756,
    left: 102,
    width: 185,
    height: 51,
  },
  iconExploreSelected1: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search6: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab7: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary1: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search7: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab8: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights1: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search8: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab9: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers1: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search9: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab10: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile1: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search10: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab11: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab12: {
    position: "absolute",
    top: 7,
    left: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0.9120000004768372,
    },
    shadowRadius: 6.84,
    elevation: 6.84,
    shadowOpacity: 1,
    width: 171,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView30: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 181,
    height: 47,
  },
  rectangleView31: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView32: {
    position: "absolute",
    bottom: 1,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView33: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView34: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView83: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 185,
    height: 51,
  },
  groupView84: {
    position: "absolute",
    top: 888,
    left: 102,
    width: 185,
    height: 51,
  },
  iconExploreSelected2: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search11: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab13: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary2: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search12: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab14: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights2: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search13: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab15: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers2: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search14: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab16: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile2: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search15: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab17: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab18: {
    position: "absolute",
    top: 7,
    left: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0.9120000004768372,
    },
    shadowRadius: 6.84,
    elevation: 6.84,
    shadowOpacity: 1,
    width: 171,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView35: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 181,
    height: 47,
  },
  rectangleView36: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView37: {
    position: "absolute",
    bottom: 1,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView38: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView39: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView85: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 185,
    height: 51,
  },
  groupView86: {
    position: "absolute",
    top: 822,
    left: 102,
    width: 185,
    height: 51,
  },
  iconExploreSelected3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
  },
  search16: {
    position: "relative",
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab19: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
  },
  search17: {
    position: "relative",
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab20: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    opacity: 0.8,
  },
  search18: {
    position: "relative",
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab21: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
  },
  search19: {
    position: "relative",
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab22: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    opacity: 0.8,
  },
  search20: {
    position: "relative",
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab23: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab24: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 1.3837069272994995,
    },
    shadowRadius: 10.38,
    elevation: 10.38,
    shadowOpacity: 1,
    width: 259,
    flexDirection: "row",
    padding: 11,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView40: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 56,
    height: 51,
  },
  rectangleView41: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView42: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView43: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView44: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView87: {
    position: "absolute",
    top: 1,
    left: 51,
    width: 60,
    height: 54,
  },
  groupView88: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 259,
    height: 57,
  },
  groupView89: {
    position: "absolute",
    top: 1648,
    left: 102,
    width: 259,
    height: 57,
  },
  iconExploreSelected4: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search21: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab25: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary4: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search22: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab26: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights4: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search23: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab27: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers4: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search24: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab28: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile4: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search25: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab29: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab30: {
    position: "absolute",
    top: 7,
    left: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0.9120000004768372,
    },
    shadowRadius: 6.84,
    elevation: 6.84,
    shadowOpacity: 1,
    width: 171,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView45: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 181,
    height: 47,
  },
  rectangleView46: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView47: {
    position: "absolute",
    bottom: 1,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView48: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView49: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView90: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 185,
    height: 51,
  },
  groupView91: {
    position: "absolute",
    top: 954,
    left: 102,
    width: 185,
    height: 51,
  },
  image33Icon: {
    position: "absolute",
    top: 1349,
    left: 102,
    width: 285,
    height: 159,
  },
  rectangleView50: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 41,
    height: 21,
  },
  rectangleView51: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView52: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView53: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView54: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView92: {
    position: "absolute",
    top: 1419,
    left: 201,
    width: 45,
    height: 24,
  },
  rectangleView55: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 41,
    height: 21,
  },
  rectangleView56: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView57: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView58: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView59: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView93: {
    position: "absolute",
    top: 1955,
    left: 279,
    width: 45,
    height: 24,
  },
  icons: {
    position: "absolute",
    top: 6,
    right: 5,
    width: 22,
    height: 4,
  },
  time: {
    position: "absolute",
    marginTop: -2.92,
    top: "50%",
    left: 11,
    fontSize: 5,
    letterSpacing: 0,
    lineHeight: 7,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  statusBarLight: {
    position: "relative",
    backgroundColor: "#fff",
    width: 124,
    height: 15,
    flexShrink: 0,
  },
  upcomingBookings: {
    position: "relative",
    fontSize: 5,
    lineHeight: 8,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  bookingImageIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 40,
    flexShrink: 0,
  },
  sIN: {
    position: "relative",
    fontSize: 7,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singapore: {
    position: "relative",
    fontSize: 5,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  terminal1: {
    position: "relative",
    fontSize: 5,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  group13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon: {
    position: "absolute",
    marginTop: -0.26,
    top: "50%",
    right: 2,
    left: 3,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    zIndex: 0,
  },
  ovalIcon: {
    position: "relative",
    width: 3,
    height: 3,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon1: {
    position: "relative",
    width: 3,
    height: 3,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView5: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAX: {
    position: "relative",
    fontSize: 7,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngeles: {
    position: "relative",
    fontSize: 5,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  terminal4: {
    position: "relative",
    fontSize: 5,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  group131: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView60: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 1,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 0.3,
    width: 16,
    height: 11,
  },
  image2Icon: {
    position: "absolute",
    top: 4,
    left: 2,
    width: 12,
    height: 3,
  },
  groupView94: {
    position: "relative",
    width: 16,
    height: 11,
    flexShrink: 0,
  },
  unitedAirlines: {
    position: "relative",
    fontSize: 5,
    lineHeight: 5,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon: {
    position: "relative",
    width: 6,
    height: 6,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr40min: {
    position: "relative",
    fontSize: 4,
    lineHeight: 5,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView9: {
    alignSelf: "stretch",
    borderRadius: 1,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  showMoreDetails: {
    position: "relative",
    fontSize: 5,
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  frameView10: {
    borderRadius: 1,
    backgroundColor: "#f8f9fb",
    width: 107,
    height: 0,
    flexShrink: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingDetails: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  viewDetails1: {
    position: "relative",
    fontSize: 5,
    lineHeight: 8,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 40,
  },
  buttonPrimary1: {
    alignSelf: "stretch",
    borderRadius: 2,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 34,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingBottom: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bookingCard: {
    alignSelf: "stretch",
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0.6613333225250244,
    },
    shadowRadius: 4.96,
    elevation: 4.96,
    shadowOpacity: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bookingsBody: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconExploreSelected5: {
    position: "relative",
    width: 7,
    height: 7,
    flexShrink: 0,
  },
  search26: {
    position: "relative",
    fontSize: 4,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab31: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary5: {
    position: "relative",
    width: 7,
    height: 7,
    flexShrink: 0,
  },
  search27: {
    position: "relative",
    fontSize: 4,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab32: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights5: {
    position: "relative",
    width: 7,
    height: 7,
    flexShrink: 0,
    opacity: 0.8,
  },
  search28: {
    position: "relative",
    fontSize: 4,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab33: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers5: {
    position: "relative",
    width: 7,
    height: 7,
    flexShrink: 0,
  },
  search29: {
    position: "relative",
    fontSize: 4,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab34: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile5: {
    position: "relative",
    width: 7,
    height: 7,
    flexShrink: 0,
    opacity: 0.8,
  },
  search30: {
    position: "relative",
    fontSize: 4,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab35: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab36: {
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0.6613333225250244,
    },
    shadowRadius: 4.96,
    elevation: 4.96,
    shadowOpacity: 1,
    width: 124,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bookings: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#f8f9fb",
    width: 124,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView61: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 136,
    height: 237,
  },
  rectangleView62: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView63: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView64: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView65: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView95: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 140,
    height: 241,
  },
  groupView96: {
    position: "absolute",
    top: 2200,
    left: 102,
    width: 140,
    height: 241,
  },
  image37Icon: {
    position: "absolute",
    top: 2193,
    left: 303,
    borderRadius: 7,
    width: 183,
    height: 256,
  },
  ellipseIcon13: {
    position: "absolute",
    top: 1412,
    left: 236,
    width: 18,
    height: 18,
  },
  ellipseIcon14: {
    position: "absolute",
    top: 1643,
    left: 202,
    width: 18,
    height: 18,
  },
  ellipseIcon15: {
    position: "absolute",
    top: 1949,
    left: 313,
    width: 18,
    height: 18,
  },
  ellipseIcon16: {
    position: "absolute",
    top: 2193,
    left: 230,
    width: 18,
    height: 18,
  },
  rectangleView66: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 181,
    height: 47,
  },
  rectangleView67: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView68: {
    position: "absolute",
    bottom: 1,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView69: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView70: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView97: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 185,
    height: 51,
  },
  iconExploreSelected6: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search31: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab37: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconItinerary6: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search32: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab38: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSearchFlights6: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search33: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab39: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconOffers6: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
  },
  search34: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "center",
  },
  bottomTab40: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconUserprofile6: {
    position: "relative",
    width: 9,
    height: 9,
    flexShrink: 0,
    opacity: 0.8,
  },
  search35: {
    position: "relative",
    fontSize: 6,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTab41: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab42: {
    position: "absolute",
    top: 7,
    left: 7,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0.9120000600814819,
    },
    shadowRadius: 8.21,
    elevation: 8.21,
    shadowOpacity: 1,
    width: 171,
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView98: {
    position: "absolute",
    top: 1020,
    left: 102,
    width: 185,
    height: 51,
  },
  image53Icon: {
    position: "absolute",
    top: 756,
    left: 307,
    width: 231,
    height: 358,
  },
  gettingStartedSettingUpN: {
    position: "absolute",
    top: 7571,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 2736,
    overflow: "hidden",
  },
  ellipseIcon17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text33: {
    position: "absolute",
    top: 25,
    left: 38,
    fontSize: 60,
    lineHeight: 105,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 49,
  },
  view: {
    position: "absolute",
    top: 3733,
    left: 30,
    width: 100,
    height: 100,
  },
  ellipseIcon18: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text34: {
    position: "absolute",
    top: 25,
    left: 38,
    fontSize: 60,
    lineHeight: 105,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 49,
  },
  view1: {
    position: "absolute",
    top: 7640,
    left: 30,
    width: 100,
    height: 100,
  },
  instructions1: {
    position: "absolute",
    top: 1775,
    left: 84,
    fontSize: 100,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  taggingGlobalLayers: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
    width: 488,
  },
  gettingStarted2: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView99: {
    position: "absolute",
    top: 42,
    left: 60,
    width: 488,
    height: 195,
  },
  startByTaggingTheLayersOn: {
    position: "absolute",
    top: 261,
    left: 60,
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 474,
  },
  greatJobYouve: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  letsTryTagging: {
    margin: 0,
  },
  greatJobYouveJustTagged: {
    position: "absolute",
    top: 913,
    left: 60,
    fontSize: 20,
    lineHeight: 32,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 474,
  },
  selectTheSplash: {
    fontFamily: "Roboto",
  },
  splashScreen1: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  inTheLocofy: {
    fontFamily: "Roboto",
  },
  selectTheSplashScreenScr: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 20,
    lineHeight: 32,
    color: "#485269",
    textAlign: "left",
    width: 403,
  },
  selectLAYERAndChooseTagOn: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon19: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text35: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView100: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView101: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 457,
    height: 28,
  },
  groupView102: {
    position: "absolute",
    top: 436,
    left: 60,
    width: 457,
    height: 130,
  },
  tRYTaggingAGlobalLayer: {
    position: "absolute",
    top: 369,
    left: 60,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  rectangleIcon5: {
    position: "absolute",
    height: "101.79%",
    width: "101.64%",
    top: "-0.89%",
    right: "-0.82%",
    bottom: "-0.89%",
    left: "-0.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  splash: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  screen: {
    margin: 0,
  },
  splashScreenTxtContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  splashScreen2: {
    position: "absolute",
    width: "100%",
    top: "45.84%",
    left: "0%",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#3f4c5a",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  blocksplashIcon: {
    position: "absolute",
    height: "35.65%",
    width: "26.42%",
    top: "0%",
    right: "37.74%",
    bottom: "64.35%",
    left: "35.85%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  group2: {
    position: "absolute",
    height: "70.12%",
    width: "86.89%",
    top: "14.29%",
    right: "6.56%",
    bottom: "15.6%",
    left: "6.56%",
  },
  tickIcon1: {
    position: "absolute",
    height: "17.86%",
    width: "16.39%",
    top: "6.56%",
    right: "76.38%",
    bottom: "75.59%",
    left: "7.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  tagsdefault1: {
    position: "absolute",
    height: "27.07%",
    width: "25.84%",
    top: "34.95%",
    right: "0%",
    bottom: "37.98%",
    left: "74.16%",
  },
  ellipseIcon20: {
    position: "absolute",
    width: "5.3%",
    top: 133,
    right: "23.19%",
    left: "71.51%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 18,
  },
  vectorIcon8: {
    position: "absolute",
    top: 142,
    left: 143,
    width: 106,
    height: 12,
  },
  icons1: {
    position: "absolute",
    top: 6,
    right: 5,
    width: 23,
    height: 4,
  },
  time1: {
    position: "absolute",
    marginTop: -3.16,
    top: "50%",
    left: 11,
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "left",
  },
  statusBarDark: {
    position: "relative",
    width: 127,
    height: 15,
    flexShrink: 0,
  },
  fickle: {
    position: "absolute",
    top: "15.12%",
    left: "0%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  fligh: {
    position: "absolute",
    top: "0%",
    left: "48.39%",
    fontSize: 19,
    fontWeight: "700",
    fontFamily: "Baloo Bhai 2",
    color: "#fff",
    textAlign: "left",
  },
  tIcon: {
    position: "absolute",
    height: "34.56%",
    width: "8.58%",
    top: "31.4%",
    right: "1.45%",
    bottom: "34.04%",
    left: "89.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  pathIcon: {
    position: "absolute",
    height: "23.56%",
    width: "9.5%",
    top: "66.81%",
    right: "4.22%",
    bottom: "9.63%",
    left: "86.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  gettingYouWhereYouNeedTo: {
    position: "absolute",
    top: "83.44%",
    left: "15.21%",
    fontSize: 4,
    fontWeight: "300",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  group21: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  group3: {
    position: "relative",
    width: 97,
    height: 30,
    flexShrink: 0,
  },
  group34Icon: {
    position: "relative",
    width: 183,
    height: 107,
    flexShrink: 0,
    opacity: 0.73,
  },
  frameView11: {
    width: 127,
    height: 275,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  splashScreen3: {
    position: "absolute",
    left: 8,
    top: 8,
  },
  rectangleView71: {
    position: "absolute",
    top: 2,
    left: 2,
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 0.7,
    width: 141,
    height: 289,
  },
  rectangleView72: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView73: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView74: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  rectangleView75: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4bc9ff",
    borderWidth: 1.1,
    width: 5,
    height: 5,
  },
  groupView103: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 145,
    height: 292,
  },
  groupView104: {
    position: "absolute",
    height: "26.55%",
    width: "55.98%",
    top: "53.59%",
    right: "26.88%",
    bottom: "19.85%",
    left: "17.14%",
  },
  gettingStartedTaggingGlob: {
    position: "absolute",
    top: 2043,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 1099,
    overflow: "hidden",
  },
  ellipseIcon21: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text36: {
    position: "absolute",
    top: 25,
    left: 38,
    fontSize: 60,
    lineHeight: 105,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 49,
  },
  view2: {
    position: "absolute",
    top: 2111,
    left: 31,
    width: 100,
    height: 100,
  },
  lineView9: {
    position: "absolute",
    top: 1775,
    left: 801,
    borderStyle: "solid",
    borderColor: "#96a2be",
    borderRightWidth: 1,
    width: 1,
    height: 16828,
  },
  lineView10: {
    position: "absolute",
    top: 1775,
    left: 816,
    borderStyle: "solid",
    borderColor: "#96a2be",
    borderRightWidth: 1,
    width: 1,
    height: 16828,
  },
  hereAreMore: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine4: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theyHaveBeen: {
    margin: 0,
  },
  hereAreMoreScreensForThe: {
    position: "absolute",
    top: 181,
    left: 59,
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 480,
  },
  moreScreens: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
    width: 468,
  },
  gettingStarted3: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView105: {
    position: "absolute",
    top: 42,
    left: 59,
    width: 468,
    height: 115,
  },
  gettingStartedPreview: {
    position: "absolute",
    top: 10684,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 503,
    overflow: "hidden",
  },
  onceYouAreHappyWithYourP: {
    position: "absolute",
    top: 258,
    left: 59,
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 456,
  },
  onThisFigmaFileSelectThe: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 398,
  },
  selectTheFrames: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon22: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text37: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView106: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView107: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 219,
    height: 28,
  },
  groupView108: {
    position: "absolute",
    top: 404,
    left: 59,
    width: 440,
    height: 118,
  },
  image43Icon: {
    position: "absolute",
    top: -28,
    left: -28,
    borderRadius: 2,
    width: 285,
    height: 119,
  },
  ellipseIcon23: {
    position: "absolute",
    height: "26.8%",
    width: "7.26%",
    top: "37.14%",
    right: "-1.98%",
    bottom: "36.06%",
    left: "94.72%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView109: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 233,
    height: 63,
  },
  groupView110: {
    position: "absolute",
    top: 565,
    left: 171,
    width: 233,
    height: 63,
  },
  syncTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  locofyBuilder: {
    margin: 0,
  },
  syncToLocofyBuilder: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
    width: 477,
  },
  gettingStarted4: {
    position: "absolute",
    top: 0,
    left: 3,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView111: {
    position: "absolute",
    top: 42,
    left: 59,
    width: 477,
    height: 195,
  },
  changeYourFrameworkSettings: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 435,
  },
  syncToLOCOFYBuilder: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon24: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text38: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView112: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView113: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 264,
    height: 28,
  },
  groupView114: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 477,
    height: 90,
  },
  lineView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 478,
    height: 1,
    opacity: 0.5,
  },
  groupIcon3: {
    position: "absolute",
    top: 136,
    left: 86,
    width: 304,
    height: 310,
  },
  groupView115: {
    position: "absolute",
    top: 671,
    left: 59,
    width: 477,
    height: 436,
  },
  gettingStartedSyncToStud: {
    position: "absolute",
    top: 13833,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 1171,
    overflow: "hidden",
  },
  onceTheSyncIsCompleteYou: {
    position: "absolute",
    top: 354,
    left: 59,
    fontSize: 24,
    lineHeight: 38,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 456,
  },
  viewAnd: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  exportCodeOn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  locofyBuilder1: {
    margin: 0,
  },
  viewAndExportCodeOnLocofy: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
    width: 477,
  },
  gettingStarted5: {
    position: "absolute",
    top: 0,
    left: 3,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView116: {
    position: "absolute",
    top: 42,
    left: 59,
    width: 477,
    height: 275,
  },
  onceYourProjectHasBeenSyn: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 435,
  },
  image47Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    width: 435,
    height: 248,
  },
  rectangleView76: {
    position: "absolute",
    top: 135,
    left: 1,
    backgroundColor: "#181c28",
    width: 68,
    height: 78,
  },
  groupView117: {
    position: "absolute",
    top: 113,
    left: 42,
    width: 435,
    height: 248,
  },
  viewCodeAndMakeChanges: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon25: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text39: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView118: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView119: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 318,
    height: 28,
  },
  groupView120: {
    position: "absolute",
    top: 461,
    left: 59,
    width: 477,
    height: 360,
  },
  image49Icon: {
    position: "absolute",
    top: -8,
    left: -8,
    borderRadius: 8,
    width: 220,
    height: 343,
  },
  image48Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    width: 192,
    height: 240,
  },
  rectangleView77: {
    position: "absolute",
    top: 71,
    left: 168,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#171c28",
    borderWidth: 1.3,
    width: 19,
    height: 19,
  },
  ellipseIcon26: {
    position: "absolute",
    height: "7.03%",
    width: "8.79%",
    top: "54.05%",
    right: "1.61%",
    bottom: "38.91%",
    left: "89.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView121: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 192,
    height: 240,
  },
  groupView122: {
    position: "absolute",
    top: 44,
    left: 223,
    width: 192,
    height: 240,
  },
  groupView123: {
    position: "absolute",
    top: 127,
    left: 42,
    width: 415,
    height: 327,
  },
  inTheBuilderYouCanMakeA: {
    position: "absolute",
    top: 36,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 435,
  },
  makeComponents: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon27: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text40: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView124: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView125: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 218,
    height: 28,
  },
  groupView126: {
    position: "absolute",
    top: 883,
    left: 59,
    width: 477,
    height: 454,
  },
  youreDoneAfterExportingY: {
    position: "absolute",
    top: 2443,
    left: 111,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 435,
  },
  runYourProject: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon28: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text41: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView127: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView128: {
    position: "absolute",
    top: 2406,
    left: 69,
    width: 213,
    height: 28,
  },
  selectViewPrototypeButton: {
    position: "absolute",
    top: 35,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 435,
  },
  previewYourWorkINPROTOTYPE: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon29: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text42: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView129: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView130: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 354,
    height: 28,
  },
  image50Icon: {
    position: "absolute",
    top: 199,
    left: 42,
    borderRadius: 8,
    width: 394,
    height: 267,
  },
  groupIcon4: {
    position: "absolute",
    top: 113,
    left: 38,
    width: 231,
    height: 78,
  },
  groupView131: {
    position: "absolute",
    top: 1397,
    left: 59,
    width: 477,
    height: 466,
  },
  lineView12: {
    position: "absolute",
    top: 852,
    left: 59,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 478,
    height: 1,
    opacity: 0.5,
  },
  lineView13: {
    position: "absolute",
    top: 1366,
    left: 59,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 478,
    height: 1,
    opacity: 0.5,
  },
  lineView14: {
    position: "absolute",
    top: 1893,
    left: 59,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 478,
    height: 1,
    opacity: 0.5,
  },
  lineView15: {
    position: "absolute",
    top: 452,
    left: 0,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 478,
    height: 1,
    opacity: 0.5,
  },
  onceYouAre: {
    fontFamily: "Roboto",
  },
  zipFile: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  or: {
    fontFamily: "Roboto",
  },
  onceYouAreSatisfiedWithYo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  addToGithub: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text43: {
    fontFamily: "Roboto",
  },
  addToGithub1: {
    margin: 0,
  },
  onceYouAreSatisfiedWithYo1: {
    position: "absolute",
    top: 34,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    color: "#485269",
    textAlign: "left",
    width: 435,
  },
  exportYourProject: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  ellipseIcon30: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  text44: {
    position: "absolute",
    top: 4,
    left: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#457eff",
    textAlign: "left",
    width: 9,
    height: 18,
  },
  groupView132: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView133: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 244,
    height: 28,
  },
  image52Icon: {
    position: "absolute",
    top: 170,
    left: 42,
    borderRadius: 8,
    width: 435,
    height: 252,
  },
  groupView134: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 477,
    height: 422,
  },
  groupView135: {
    position: "absolute",
    top: 1924,
    left: 59,
    width: 477,
    height: 452,
  },
  rectangleView78: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#222a3b",
    width: 319,
    height: 426,
  },
  yourCodeHasBeenExported: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#e8effd",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 283,
    height: 17,
  },
  rectangleView79: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#323f5c",
    width: 90,
    height: 73,
  },
  screens: {
    position: "absolute",
    height: "17.74%",
    width: "100%",
    top: "82.26%",
    left: "0%",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "center",
  },
  text45: {
    position: "absolute",
    height: "38.21%",
    width: "35%",
    top: "42.98%",
    left: "32.5%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  group7Icon: {
    position: "absolute",
    height: "35.48%",
    width: "65%",
    top: "0%",
    right: "17.5%",
    bottom: "64.52%",
    left: "17.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView136: {
    position: "absolute",
    height: "76.11%",
    width: "33.74%",
    top: "11.89%",
    right: "33.13%",
    bottom: "11.99%",
    left: "33.13%",
  },
  groupView137: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 90,
    height: 73,
  },
  rectangleView80: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#323f5c",
    width: 90,
    height: 73,
  },
  rectangleCopy4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 90,
    height: 73,
  },
  linesOfCode: {
    position: "absolute",
    height: "17.74%",
    width: "100%",
    top: "82.26%",
    left: "0%",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "center",
  },
  text46: {
    position: "absolute",
    height: "38.21%",
    width: "93.94%",
    top: "42.98%",
    left: "3.03%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  group7Icon1: {
    position: "absolute",
    height: "35.48%",
    width: "39.39%",
    top: "0%",
    right: "30.3%",
    bottom: "64.52%",
    left: "30.3%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView138: {
    position: "absolute",
    height: "76.11%",
    width: "55.66%",
    top: "11.94%",
    right: "22.17%",
    bottom: "11.94%",
    left: "22.17%",
  },
  group8Copy: {
    position: "absolute",
    top: 0,
    left: 98,
    width: 90,
    height: 73,
  },
  rectangleView81: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#323f5c",
    width: 90,
    height: 73,
  },
  rectangleCopy41: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 90,
    height: 73,
  },
  assetsIcon: {
    position: "absolute",
    top: 0,
    left: 14,
    width: 21,
    height: 21,
  },
  totalAssets: {
    position: "absolute",
    height: "17.57%",
    width: "100%",
    top: "82.43%",
    left: "0%",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "center",
  },
  text47: {
    position: "absolute",
    height: "37.84%",
    width: "93.94%",
    top: "43.53%",
    left: "3.03%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  groupView139: {
    position: "absolute",
    top: 8,
    left: 20,
    width: 50,
    height: 56,
  },
  group8Copy1: {
    position: "absolute",
    top: 0,
    left: 196,
    width: 90,
    height: 73,
  },
  group211: {
    position: "relative",
    width: 285,
    height: 73,
    flexShrink: 0,
  },
  lineView16: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#323f5c",
    borderTopWidth: 0.6,
    width: 286,
    height: 1,
    flexShrink: 0,
    opacity: 0.6,
  },
  recommendedNextSteps: {
    position: "relative",
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#e8effd",
    textAlign: "left",
  },
  frameView12: {
    position: "absolute",
    top: 21,
    left: 17,
    width: 285,
    height: 126,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  here: {
    textDecoration: "underline",
  },
  noteMakeSureYouHaveInsta: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  toPreviewAndRunTheProject: {
    position: "relative",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#e8effd",
    textAlign: "left",
  },
  ellipseIcon31: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12,
    height: 12,
  },
  text48: {
    position: "absolute",
    top: 2,
    left: 4,
    fontSize: 7,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  groupView140: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  unzipDownloadedFile: {
    position: "relative",
    fontSize: 8,
    lineHeight: 13,
    fontFamily: "Roboto",
    color: "#e8effd",
    textAlign: "left",
  },
  frameView13: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon32: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12,
    height: 12,
  },
  text49: {
    position: "absolute",
    top: 2,
    left: 4,
    fontSize: 7,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  groupView141: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  visualStudioCode: {
    textDecoration: "underline",
  },
  openProjectFolderInVisual: {
    fontFamily: "Roboto",
  },
  openProjectFolderInVisual1: {
    position: "relative",
    fontSize: 8,
    lineHeight: 13,
    color: "#e8effd",
    textAlign: "left",
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon33: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12,
    height: 12,
  },
  text50: {
    position: "absolute",
    top: 2,
    left: 4,
    fontSize: 7,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  groupView142: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    zIndex: 2,
  },
  text51: {
    letterSpacing: "7%",
  },
  run: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  npmInstall: {
    letterSpacing: "-4%",
    fontWeight: "500",
    fontFamily: "Source Code Pro",
    color: "#96a2be",
  },
  text52: {
    letterSpacing: "10%",
  },
  inTheTerminal: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  runNpmInstallInTheTermina: {
    position: "relative",
    fontSize: 8,
    lineHeight: 13,
    textAlign: "left",
    zIndex: 1,
  },
  rectangleView82: {
    position: "absolute",
    top: 0,
    left: 33,
    borderRadius: 1,
    backgroundColor: "#30394e",
    width: 52,
    height: 12,
    flexShrink: 0,
    zIndex: 0,
  },
  frameView15: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  ellipseIcon34: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12,
    height: 12,
  },
  text53: {
    position: "absolute",
    top: 2,
    left: 4,
    fontSize: 7,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  groupView143: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  frameView16: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mobileappleIcon: {
    position: "relative",
    width: 11,
    height: 11,
    flexShrink: 0,
    overflow: "hidden",
  },
  forIOSDeviceOnlyOnMacOS: {
    position: "relative",
    fontSize: 7,
    lineHeight: 13,
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  frameView17: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 3,
  },
  aRun: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  cdIos: {
    letterSpacing: "-4%",
    fontWeight: "500",
    fontFamily: "Source Code Pro",
    color: "#96a2be",
  },
  aRunCdIosPodInstall: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bThenRun: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  npxReactNativeRunIos: {
    letterSpacing: "-4%",
    fontWeight: "500",
    fontFamily: "Source Code Pro",
    color: "#96a2be",
  },
  text54: {
    letterSpacing: "7%",
  },
  toViewOnIOSSimulatorOr: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  bThenRunNpxReactNative: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  followTheInstructions: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  here1: {
    textDecoration: "underline",
  },
  hereToRunOnPhysicalDevice: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  followTheInstructionsHereT: {
    margin: 0,
  },
  aRunCdIosPodInstall1: {
    position: "relative",
    fontSize: 8,
    lineHeight: 13,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 248,
  },
  lineView17: {
    alignSelf: "stretch",
    position: "relative",
    borderStyle: "solid",
    borderColor: "#323f5c",
    borderTopWidth: 0.6,
    height: 1,
    flexShrink: 0,
    opacity: 0.6,
  },
  mobileandroidIcon: {
    position: "relative",
    width: 11,
    height: 11,
    flexShrink: 0,
    overflow: "hidden",
  },
  forAndroidDevice: {
    position: "relative",
    fontSize: 7,
    lineHeight: 13,
    fontFamily: "Roboto",
    color: "#96a2be",
    textAlign: "left",
  },
  frameView18: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 2,
  },
  androidStudio: {
    textDecoration: "underline",
  },
  aUseAndroidVirtualDevice: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  aUseAndroidVirtualDevice1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  here2: {
    textDecoration: "underline",
  },
  hereToRunOnPhysicalDevice1: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  hereToRunOnPhysicalDevice2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text55: {
    letterSpacing: "8%",
  },
  bThenRun1: {
    fontFamily: "Roboto",
    color: "#e8effd",
  },
  npxReactNativeRunAndroid: {
    letterSpacing: "-4%",
    fontFamily: "Source Code Pro",
    color: "#96a2be",
  },
  bThenRunNpxReactNative1: {
    margin: 0,
  },
  aUseAndroidVirtualDevice2: {
    position: "relative",
    fontSize: 8,
    lineHeight: 13,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 248,
    zIndex: 1,
  },
  rectangleView83: {
    position: "absolute",
    height: "23.78%",
    width: "51.51%",
    top: "75.08%",
    right: "31.79%",
    bottom: "1.14%",
    left: "16.71%",
    borderRadius: 1,
    backgroundColor: "#30394e",
    zIndex: 0,
  },
  frameView19: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  frameView20: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 2,
  },
  rectangleView84: {
    position: "absolute",
    top: 14,
    left: 23,
    borderRadius: 1,
    backgroundColor: "#30394e",
    width: 133,
    height: 12,
    flexShrink: 0,
    zIndex: 1,
  },
  rectangleView85: {
    position: "absolute",
    top: 27,
    left: 41,
    borderRadius: 1,
    backgroundColor: "#30394e",
    width: 109,
    height: 12,
    flexShrink: 0,
    zIndex: 0,
  },
  frameView21: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  frameView22: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView23: {
    width: 261,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView24: {
    position: "absolute",
    top: 154,
    left: 17,
    borderRadius: 2,
    backgroundColor: "#293143",
    width: 285,
    height: 216,
    flexDirection: "column",
    paddingHorizontal: 9,
    paddingVertical: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon5: {
    position: "absolute",
    height: "17.31%",
    width: "24.3%",
    top: "622.7%",
    right: "1.72%",
    bottom: "-540.01%",
    left: "73.98%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  rectangleIcon6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ok: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  group4: {
    position: "absolute",
    height: "44.38%",
    width: "16.87%",
    top: "28.84%",
    right: "39.84%",
    bottom: "26.78%",
    left: "43.3%",
  },
  group5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  group132: {
    position: "relative",
    width: 59,
    height: 23,
    flexShrink: 0,
  },
  howAreYou: {
    color: "#e8effd",
  },
  text56: {
    color: "#3f4c5a",
  },
  giveFeedback: {
    color: "#457eff",
  },
  howAreYouEnjoyingTheServi: {
    position: "relative",
    fontSize: 7,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  frameView25: {
    position: "absolute",
    top: 381,
    left: 83,
    width: 154,
    height: 37,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupIcon6: {
    position: "absolute",
    height: "1.11%",
    width: "1.49%",
    top: "2.23%",
    right: "3.03%",
    bottom: "96.66%",
    left: "95.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView144: {
    position: "absolute",
    top: 2529,
    left: 111,
    width: 319,
    height: 426,
  },
  gettingStartedSyncToStud1: {
    position: "absolute",
    top: 15383,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 3048,
    overflow: "hidden",
  },
  selectALayer: {
    fontFamily: "Roboto",
  },
  preview: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  buttonToSee: {
    fontFamily: "Roboto",
  },
  selectALayerOrAFrameAnd: {
    position: "absolute",
    top: 253,
    left: 60,
    fontSize: 24,
    lineHeight: 38,
    color: "#485269",
    textAlign: "left",
    width: 480,
  },
  youCanNowSeeHowYourProje: {
    position: "absolute",
    top: 433,
    left: 101,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 401,
  },
  viewProjectInDifferentScre: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  groupIcon7: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView145: {
    position: "absolute",
    top: 399,
    left: 60,
    width: 411,
    height: 28,
  },
  youCanAlso: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  forThisProject: {
    margin: 0,
  },
  youCanAlsoCheckOutTheInt: {
    position: "absolute",
    top: 38,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 409,
  },
  tESTOUTTHEINTERACTIONS: {
    position: "absolute",
    top: 0,
    left: 42,
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  groupIcon8: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 24,
    height: 24,
  },
  groupView146: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 294,
    height: 28,
  },
  groupView147: {
    position: "absolute",
    top: 955,
    left: 59,
    width: 451,
    height: 178,
  },
  previewYourProject: {
    position: "absolute",
    top: 35,
    left: 0,
    fontSize: 65,
    lineHeight: 80,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
    width: 468,
  },
  gettingStarted6: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
  },
  groupView148: {
    position: "absolute",
    top: 42,
    left: 59,
    width: 468,
    height: 195,
  },
  lineView18: {
    position: "absolute",
    top: 926,
    left: 59,
    borderStyle: "solid",
    borderColor: "#bac2d6",
    borderTopWidth: 1,
    width: 482,
    height: 1,
    opacity: 0.5,
  },
  duringPreviewYourProjectW: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 15,
    lineHeight: 28,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "center",
    width: 435,
  },
  groupView149: {
    position: "absolute",
    bottom: 0,
    left: 8,
    width: 435,
    height: 112,
  },
  lineIcon: {
    position: "absolute",
    bottom: 139,
    left: 0,
    width: 461,
    height: 1,
  },
  groupIcon9: {
    position: "absolute",
    bottom: 127,
    left: 214,
    width: 24,
    height: 24,
  },
  groupView150: {
    position: "absolute",
    bottom: 28,
    left: 66,
    width: 461,
    height: 151,
  },
  image46Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 410,
    height: 334,
  },
  rectangleView86: {
    position: "absolute",
    top: 311,
    left: 75,
    backgroundColor: "#f4f6fa",
    width: 335,
    height: 23,
  },
  rectangleView87: {
    position: "absolute",
    top: 52,
    left: 207,
    backgroundColor: "#f4f6fa",
    width: 203,
    height: 260,
  },
  groupView151: {
    position: "absolute",
    top: 540,
    left: 101,
    width: 410,
    height: 334,
  },
  image54Icon: {
    position: "absolute",
    top: 1162,
    left: 128,
    width: 326,
    height: 271,
  },
  gettingStartedPreview1: {
    position: "absolute",
    top: 11838,
    left: 89,
    backgroundColor: "#fafbff",
    width: 595,
    height: 1653,
    overflow: "hidden",
  },
  ellipseIcon35: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text57: {
    position: "absolute",
    top: 25,
    left: 38,
    fontSize: 60,
    lineHeight: 105,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 49,
  },
  groupView152: {
    position: "absolute",
    top: 11876,
    left: 0,
    width: 100,
    height: 100,
  },
  ellipseIcon36: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text58: {
    position: "absolute",
    top: 25,
    left: 38,
    fontSize: 60,
    lineHeight: 105,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 49,
  },
  groupView153: {
    position: "absolute",
    top: 13870,
    left: 16,
    width: 100,
    height: 100,
  },
  ellipseIcon37: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text59: {
    position: "absolute",
    top: 25,
    left: 38,
    fontSize: 60,
    lineHeight: 105,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 49,
  },
  groupView154: {
    position: "absolute",
    top: 15454,
    left: 16,
    width: 100,
    height: 100,
  },
  tryTaggingTheSearchButton: {
    position: "absolute",
    top: 57,
    left: 597,
    fontSize: 74,
    letterSpacing: -3,
    lineHeight: 90,
    fontFamily: "Just Me Again Down Here",
    color: "#457eff",
    textAlign: "center",
    width: 921,
    transform: [
      {
        rotate: "2.97deg",
      },
    ],
  },
  vectorIcon9: {
    position: "absolute",
    top: 85,
    left: 124,
    width: 580,
    height: 649,
  },
  groupView155: {
    position: "absolute",
    top: 3471,
    left: 1166,
    width: 1516,
    height: 724,
  },
  tryTaggingThisInput: {
    position: "absolute",
    top: 136,
    left: 58,
    fontSize: 74,
    letterSpacing: -3,
    lineHeight: 80,
    fontFamily: "Just Me Again Down Here",
    color: "#457eff",
    textAlign: "center",
    width: 500,
    transform: [
      {
        rotate: "-1.22deg",
      },
    ],
  },
  vectorIcon10: {
    position: "absolute",
    top: -1,
    left: 3,
    width: 161,
    height: 107,
  },
  groupView156: {
    position: "absolute",
    top: 5820,
    left: 1323,
    width: 560,
    height: 216,
  },
  group3Icon: {
    position: "absolute",
    height: "0.88%",
    width: "7.21%",
    top: "31.06%",
    right: "37.38%",
    bottom: "68.07%",
    left: "55.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  selectBottomTabInPlugin: {
    position: "absolute",
    top: 132,
    left: 62,
    fontSize: 74,
    letterSpacing: -3,
    lineHeight: 90,
    fontFamily: "Just Me Again Down Here",
    color: "#457eff",
    textAlign: "center",
    width: 881,
    transform: [
      {
        rotate: "-1.22deg",
      },
    ],
  },
  vectorIcon11: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 166,
    height: 102,
  },
  groupView157: {
    position: "absolute",
    top: 8589,
    left: 1323,
    width: 946,
    height: 312,
  },
  group3Icon1: {
    position: "absolute",
    height: "0.88%",
    width: "7.21%",
    top: "45.97%",
    right: "34.3%",
    bottom: "53.15%",
    left: "58.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  gettingStartedWithLocofy: {
    position: "absolute",
    top: 690,
    left: 64,
    fontSize: 115,
    lineHeight: 153,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#484f5e",
    textAlign: "left",
  },
  toGetStarted: {
    fontFamily: "Roboto",
  },
  fickleFlightMobile: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  sampleProject: {
    fontFamily: "Roboto",
  },
  toGetStartedHereIsAQuic: {
    position: "absolute",
    top: 844,
    left: 74,
    fontSize: 38,
    lineHeight: 55,
    color: "#485269",
    textAlign: "left",
    width: 1370,
  },
  rectangleView88: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#e2e6ee",
    width: 319,
    height: 300,
  },
  tagging: {
    position: "absolute",
    top: 33,
    left: 114,
    fontSize: 26,
    lineHeight: 33,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "center",
  },
  text60: {
    position: "absolute",
    top: 67,
    left: 55,
    fontSize: 96,
    lineHeight: 96,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "center",
    width: 208,
  },
  layers1: {
    position: "absolute",
    top: 158,
    left: 52,
    fontSize: 33,
    letterSpacing: 1.9,
    lineHeight: 48,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "center",
    width: 208,
  },
  groupView158: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 319,
    height: 300,
  },
  weveAlreadyPreTagged22Ot: {
    position: "absolute",
    top: 210,
    left: 41,
    fontSize: 20,
    lineHeight: 33,
    fontFamily: "Roboto",
    color: "#5e6a86",
    textAlign: "center",
    width: 237,
    height: 55,
  },
  groupView159: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 319,
    height: 300,
  },
  rectangleView89: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#e2e6ee",
    width: 319,
    height: 300,
  },
  editing: {
    position: "absolute",
    top: 33,
    left: 121,
    fontSize: 26,
    lineHeight: 33,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "center",
  },
  text61: {
    position: "absolute",
    top: 67,
    left: 55,
    fontSize: 96,
    lineHeight: 96,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "center",
    width: 208,
  },
  properties2: {
    position: "absolute",
    top: 158,
    left: 34,
    fontSize: 33,
    letterSpacing: 1.9,
    lineHeight: 48,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "center",
    width: 244,
  },
  groupView160: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 319,
    height: 300,
  },
  inTheStyling: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  layoutTabs: {
    margin: 0,
  },
  inTheStylingLayoutTabs: {
    position: "absolute",
    top: 210,
    left: 41,
    fontSize: 20,
    lineHeight: 33,
    fontFamily: "Roboto",
    color: "#5e6a86",
    textAlign: "center",
    width: 237,
    height: 55,
  },
  groupView161: {
    position: "absolute",
    top: 0,
    left: 360,
    width: 319,
    height: 300,
  },
  rectangleView90: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#e2e6ee",
    width: 319,
    height: 300,
  },
  adding: {
    position: "absolute",
    top: 33,
    left: 119,
    fontSize: 26,
    lineHeight: 33,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "center",
  },
  text62: {
    position: "absolute",
    top: 67,
    left: 55,
    fontSize: 96,
    lineHeight: 96,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "center",
    width: 208,
  },
  action: {
    position: "absolute",
    top: 158,
    left: 52,
    fontSize: 33,
    letterSpacing: 1.9,
    lineHeight: 48,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#457eff",
    textAlign: "center",
    width: 208,
  },
  groupView162: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 319,
    height: 300,
  },
  inTheActionsTab: {
    position: "absolute",
    top: 210,
    left: 59,
    fontSize: 20,
    lineHeight: 33,
    fontFamily: "Roboto",
    color: "#5e6a86",
    textAlign: "center",
    width: 200,
    height: 55,
  },
  groupView163: {
    position: "absolute",
    top: 0,
    left: 721,
    width: 319,
    height: 300,
  },
  rectangleView91: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#e2e6ee",
    width: 319,
    height: 300,
  },
  getting: {
    color: "#485269",
  },
  getting1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  livePreview: {
    color: "#457eff",
  },
  livePreview1: {
    margin: 0,
  },
  gettingLivePreview: {
    position: "absolute",
    top: 103,
    left: 47,
    fontSize: 31,
    letterSpacing: 1.8,
    lineHeight: 47,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    textAlign: "center",
    width: 225,
  },
  groupView164: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 319,
    height: 300,
  },
  groupView165: {
    position: "absolute",
    top: 0,
    left: 1081,
    width: 319,
    height: 300,
  },
  rectangleView92: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#e2e6ee",
    width: 319,
    height: 300,
  },
  exporting: {
    color: "#485269",
  },
  code: {
    color: "#457eff",
  },
  exportingCode: {
    position: "absolute",
    top: 103,
    left: 46,
    fontSize: 31,
    letterSpacing: 1.8,
    lineHeight: 47,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto",
    textAlign: "center",
    width: 226,
  },
  groupView166: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 319,
    height: 300,
  },
  groupView167: {
    position: "absolute",
    top: 0,
    left: 1441,
    width: 319,
    height: 300,
  },
  groupView168: {
    position: "absolute",
    top: 1117,
    left: 81,
    width: 1760,
    height: 300,
  },
  inThisGuidedSampleProject: {
    position: "absolute",
    top: 1029,
    left: 81,
    fontSize: 38,
    lineHeight: 55,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 1370,
  },
  totalTime10To15Minutes: {
    position: "absolute",
    top: 0,
    left: 75,
    fontSize: 38,
    lineHeight: 55,
    fontFamily: "Roboto",
    color: "#485269",
    textAlign: "left",
    width: 1370,
  },
  groupIcon10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 55,
    height: 55,
  },
  groupView169: {
    position: "absolute",
    top: 1453,
    left: 81,
    width: 1444,
    height: 56,
  },
  group2Icon1: {
    position: "absolute",
    height: "0.86%",
    width: "7.78%",
    top: "18.91%",
    right: "0%",
    bottom: "80.24%",
    left: "92.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  instructions2: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 18602,
  },
});

export default Instructions;
