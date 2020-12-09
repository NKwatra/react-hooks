import { Typography, Box, CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import ThemeContext, { siteThemes, theme } from "../utils/context";
import Header from "../components/Header";
import Example from "../components/Example";

const nameToComponentMap = {
  useState: {
    preview:
      "https://codesandbox.io/embed/lucid-wilson-dlvww?codemirror=1&fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark&view=preview",
    editor:
      "https://codesandbox.io/embed/lucid-wilson-dlvww?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=editor&highlights=7,8,9,56,57,74,75,82,83,90,91",
  },
  useEffect: {
    preview:
      "https://codesandbox.io/embed/react-clock-hnuxc?codemirror=1&fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark&view=preview",
    editor:
      "https://codesandbox.io/embed/react-clock-hnuxc?codemirror=1&fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark&view=editor&highlights=24,25,26,27,28,29,30,31,32,33,34",
  },
  useContext: {
    preview:
      "https://codesandbox.io/embed/docs-page-bkye4?codemirror=1&fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark&view=preview",
    editor:
      "https://codesandbox.io/embed/docs-page-bkye4?codemirror=1&fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark&view=editor&highlights=8,10,14",
  },
};

export default function HookPage(props) {
  const router = useRouter();
  const { name } = router.query;
  const [open, setOpen] = useState(false);
  const [siteTheme, setSiteTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setProgress(30);
      const currentTheme = window.localStorage.getItem(theme);
      setProgress(60);
      if (currentTheme !== null && siteTheme !== currentTheme)
        setSiteTheme(currentTheme);
      setProgress(100);
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={progress} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  ) : (
    <ThemeContext.Provider value={siteThemes[siteTheme]}>
      <Navigation active={name} open={open} setOpen={setOpen} />
      <Header
        setOpen={setOpen}
        name={name}
        updateSiteTheme={setSiteTheme}
        siteTheme={siteTheme}
      >
        {nameToComponentMap[name] ? (
          <Example {...nameToComponentMap[name]} />
        ) : (
          <>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              consequat, purus semper interdum tincidunt, ex lorem sagittis
              metus, vitae tempor erat erat nec orci. Phasellus elementum a
              lacus at semper. Aenean bibendum fringilla orci sodales convallis.
              Proin pharetra turpis eget odio blandit bibendum vel ac turpis.
              Integer efficitur nibh nulla, vitae fringilla turpis iaculis eget.
              Fusce nisi nunc, vestibulum ut varius quis, consequat et dolor. In
              semper vitae enim eu condimentum. Duis mi risus, ullamcorper et
              sodales scelerisque, auctor vel erat. Donec eu consectetur velit.
              Nunc ut tellus et sapien sollicitudin ullamcorper. Quisque
              vestibulum turpis ut cursus dignissim. Fusce euismod, diam nec
              facilisis egestas, dolor lectus rutrum dolor, a vehicula libero
              nunc vel est. Phasellus malesuada eros ipsum, non tincidunt turpis
              porta accumsan. Fusce at mi ut nunc porttitor molestie. Aliquam
              eros mi, congue vitae erat nec, sagittis mollis libero. Ut varius
              vel risus eu mattis. Sed at metus ut dui venenatis sollicitudin et
              vitae nisl. Nunc in velit euismod, vulputate risus vitae,
              consectetur diam. Maecenas consectetur sem erat, a tempor dolor
              finibus vel. Proin ante magna, scelerisque vitae pretium non,
              dignissim ut risus. Duis vestibulum libero vel arcu cursus, ut
              varius arcu laoreet. Sed efficitur mi lacus, at dictum ante
              aliquam ultrices. Aliquam semper, eros et placerat egestas, elit
              neque consequat est, quis ullamcorper est libero id felis. Cras
              pharetra a neque id semper. Praesent rhoncus hendrerit lacus
              ultrices ultricies. Nullam orci mi, consectetur non tristique nec,
              ornare et nisl. Praesent non nunc libero. Suspendisse iaculis
              augue risus, a ornare ligula blandit et. Praesent sit amet magna
              sapien. Vestibulum placerat, ipsum ut hendrerit porta, orci eros
              lacinia sem, sit amet sagittis libero tellus quis neque. Aliquam
              blandit lacinia felis in bibendum. Nullam accumsan sed massa sit
              amet efficitur. In mauris leo, condimentum in libero quis,
              dignissim vehicula purus. Morbi id arcu leo. Praesent tristique
              vulputate tortor, sit amet bibendum mauris consequat vitae. Duis
              justo nulla, elementum ut risus eget, rhoncus interdum tellus.
              Etiam nunc orci, tincidunt et rutrum id, lacinia eget lectus. Nunc
              vel tempus ante. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Ut consequat at tellus
              at hendrerit. Aliquam a pharetra nibh, lobortis maximus nisi.
              Fusce feugiat odio sit amet semper accumsan. In ut posuere augue,
              sit amet condimentum nulla. Donec lobortis erat in nisl maximus
              faucibus. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Quisque hendrerit enim ex,
              ac consectetur velit malesuada dignissim. Ut ultricies enim id
              lectus consectetur, nec vestibulum eros porta. Sed rutrum at neque
              sit amet pulvinar. Duis non magna condimentum, sodales orci in,
              maximus ligula. Vestibulum sagittis odio imperdiet rhoncus
              consequat. Maecenas eleifend nec ligula sit amet maximus. Maecenas
              vel quam sit amet diam hendrerit suscipit non quis ligula. Cras
              sollicitudin, ex non lobortis aliquet, mi mi pellentesque ipsum,
              ut interdum ligula nulla at velit. Nulla in mollis orci. Curabitur
              nulla orci, ultricies eu odio id, bibendum iaculis enim. Nullam
              lobortis tristique sem, ac efficitur nisi. Sed ac cursus elit.
              Aenean vitae volutpat nibh, eget ullamcorper lorem. Morbi dapibus
              commodo urna ac dapibus. Quisque magna nisl, pharetra non
              porttitor et, accumsan ut augue. Nullam consectetur convallis
              tincidunt. In dapibus tellus sed hendrerit sagittis. Integer a
              sagittis justo, vitae mollis erat. Curabitur non nulla sapien.
              Maecenas vel dui non lacus dapibus suscipit. Nam semper purus quis
              purus congue euismod. Curabitur eleifend, magna vel tempor
              venenatis, magna odio eleifend est, quis dignissim dolor augue nec
              lacus. Sed porta nisi quis erat dapibus, non porta odio dapibus.
              Integer erat massa, viverra eget eros et, elementum posuere
              turpis. Donec et euismod mauris. Phasellus posuere nisl sed
              porttitor molestie. Sed vel odio convallis, mollis nisi a, egestas
              diam. Curabitur ultricies leo ut egestas euismod. Fusce
              consectetur velit feugiat eros blandit sagittis. Suspendisse eu
              commodo est, vitae pulvinar tellus. Pellentesque sodales pretium
              purus, at consequat ante mollis in. Sed molestie massa eu turpis
              dignissim dignissim. Maecenas ullamcorper molestie metus nec
              eleifend. In blandit a ipsum at imperdiet. Morbi interdum semper
              odio at feugiat. Vivamus luctus suscipit nulla sed hendrerit.
              Phasellus aliquam dolor sit amet nulla eleifend, id tincidunt
              mauris ullamcorper. Suspendisse sit amet mauris nec orci facilisis
              vehicula. In odio nisl, porttitor et luctus eget, pellentesque
              eget felis. Vestibulum ut dolor eu nibh ultrices sagittis a nec
              ipsum. Donec laoreet lacinia vestibulum. Aenean nec ligula
              hendrerit, convallis augue a, pretium neque. Integer laoreet
              mollis tincidunt. Sed mi urna, faucibus et semper id, porta at
              sapien. Sed in tristique quam. Mauris egestas lobortis orci, a
              tincidunt eros fermentum a. Proin varius scelerisque dignissim.
              Nullam vel justo ut quam ultricies finibus. Maecenas suscipit
              risus quis eleifend lobortis. Vivamus viverra sem odio, nec
              vulputate lectus fringilla sit amet. Praesent porttitor eleifend
              metus, sit amet euismod purus aliquet ut. Vivamus imperdiet purus
              id quam dapibus vulputate. Nullam aliquet ligula sit amet neque
              sollicitudin, et semper eros aliquet. Nam vitae nulla ut leo
              scelerisque rutrum eget at purus. Nulla mi est, semper ac
              efficitur id, ultrices eu magna. Vestibulum pulvinar commodo
              turpis, a malesuada tellus placerat et. Phasellus blandit sodales
              erat, vitae tristique neque cursus vel. Morbi neque sem, rutrum
              nec nunc tincidunt, fringilla euismod justo. Sed eu nibh enim.
              Aliquam tortor nisl, sagittis ac tellus eu, ultrices condimentum
              augue. Nam pharetra sed leo vel mattis. Vestibulum accumsan
              egestas vulputate. Duis facilisis a tortor ac ultricies. Cras non
              arcu et ante blandit congue non at dui. Nunc auctor feugiat neque,
              consequat elementum turpis venenatis nec. Vestibulum suscipit
              hendrerit interdum. Praesent tempus ante non eleifend aliquam.
              Proin nec massa semper, fermentum nisl in, auctor turpis. Etiam in
              libero ante. Duis nec dignissim odio. Integer quis augue vitae
              lectus ultrices consequat et ut velit. Quisque accumsan, erat eget
              ultricies suscipit, enim velit convallis risus, ac luctus urna
              urna non ligula. Integer volutpat, nisl a feugiat feugiat, odio
              arcu ullamcorper ipsum, vitae pharetra lectus urna et felis. Nunc
              dapibus varius ipsum et aliquet. In auctor volutpat lobortis.
              Aliquam nec faucibus orci. In ullamcorper odio non quam maximus,
              nec hendrerit felis volutpat. Sed libero enim, consequat id mattis
              eu, maximus non augue. In eu augue a augue aliquam sollicitudin.
              Quisque accumsan aliquam orci, non vehicula dolor iaculis a. Duis
              in lectus eget lectus molestie aliquet vel id metus. Curabitur
              consectetur lacus ac ante rutrum tempor. Duis porttitor dolor eget
              euismod tincidunt. Phasellus ac elit lacinia, rhoncus erat vel,
              fermentum massa. Suspendisse blandit euismod sapien, vitae
              efficitur augue eleifend nec. Sed et neque nisi. Etiam erat eros,
              porttitor eu leo eu, semper fringilla mi. Nam ornare odio at velit
              eleifend, sed laoreet sem rutrum. Donec molestie nibh lacinia orci
              tempor, ut posuere leo feugiat. Proin facilisis faucibus leo vitae
              pretium. Fusce augue mi, viverra ac sodales quis, posuere nec
              ligula. Morbi tristique suscipit pretium. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nunc congue consectetur orci, a posuere enim rutrum sit amet.
              Etiam quis euismod nibh. Donec ac dolor cursus, congue metus
              dignissim, tempor est. Duis tincidunt eu quam a aliquam. In
              consectetur ut mauris ac vulputate. Ut congue lacinia nibh, sit
              amet lacinia risus sodales porttitor. Morbi eleifend sed neque sit
              amet efficitur. Aliquam lacinia tristique mauris a laoreet. Nam
              fermentum libero nec nunc fermentum sodales. Morbi cursus sem vel
              lacus gravida consectetur. Integer placerat, lacus sit amet
              dignissim suscipit, est nisl dictum risus, sit amet imperdiet
              lectus diam eu eros. Vivamus at sapien malesuada, dapibus lacus
              vitae, laoreet lorem. Donec ut urna porttitor, lacinia nisl sed,
              faucibus urna. Nam pretium orci id mauris porttitor, ultrices
              facilisis mi congue. Integer ultrices magna et euismod placerat.
              Donec metus est, mattis lobortis mi at, vulputate maximus quam. Ut
              bibendum posuere est, vel laoreet orci condimentum at. Aenean eu
              gravida lectus. Nullam maximus neque id urna condimentum, at
              varius neque consectetur. Fusce faucibus metus eget velit
              volutpat, sed aliquam massa aliquam. Praesent nec porta nunc,
              scelerisque laoreet tellus. Nulla vel euismod quam, eu ultrices
              odio. Duis scelerisque nibh sit amet odio pellentesque convallis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin magna sapien, et accumsan ligula malesuada non.
              Quisque diam sem, viverra vitae est nec, tempus mollis lorem. Ut
              at varius elit. Maecenas quis odio ac felis tristique suscipit.
              Duis et velit malesuada, tristique dolor ut, condimentum mauris.
              Morbi mollis ante a sapien sollicitudin, a rutrum libero
              ultricies. Donec pellentesque a massa vitae lacinia. Duis et urna
              eu tortor faucibus interdum nec mattis risus. Praesent et ornare
              erat. Nam aliquam tortor eget eros semper bibendum. Ut erat nulla,
              tempus a augue non, elementum dignissim massa. In molestie dictum
              nisl. Nam aliquam aliquam lacinia. Vivamus lacinia vestibulum
              felis, nec lobortis tortor bibendum et. Proin placerat imperdiet
              est, quis sagittis velit suscipit nec. Quisque malesuada, nunc
              scelerisque rhoncus ultricies, felis ex lobortis purus, non
              aliquet ligula lectus at lectus. Fusce nisl lacus, condimentum
              eget varius vitae, lobortis at massa. Aliquam tincidunt nibh
              lacus, et luctus ex efficitur a. Curabitur ipsum nulla, posuere
              quis egestas ut, eleifend convallis nibh. Aliquam nisi ex, congue
              sit amet volutpat vitae, lobortis quis elit. Duis porta nisi
              ultricies ex porttitor, sed imperdiet purus facilisis. Mauris quis
              mattis urna. Duis luctus enim sit amet condimentum tempus. Nunc in
              pharetra velit. Donec pellentesque imperdiet cursus. Donec
              dignissim sem vitae diam sagittis lacinia. Nulla ipsum nisl,
              vestibulum at nibh eget, interdum imperdiet diam. Praesent tempus
              eget orci eget consequat. Vivamus at neque sodales, accumsan risus
              et, porta est. Proin at dapibus massa. Vivamus finibus leo ornare,
              rutrum enim at, scelerisque dui. Sed venenatis sapien suscipit
              nibh varius dapibus. Phasellus eleifend tortor vehicula quam
              accumsan tempor. Suspendisse vitae augue mi. Integer bibendum
              purus mattis dui sagittis euismod ac eget elit. In pretium purus
              et ipsum dapibus, id porttitor justo varius. In pulvinar dolor
              vitae ornare condimentum. Etiam quis luctus ante, nec suscipit mi.
              Mauris pharetra erat in tortor venenatis suscipit. Sed nulla quam,
              scelerisque ac tincidunt a, dapibus at turpis. Quisque rutrum,
              mauris a congue aliquet, est felis commodo dui, id fermentum leo
              turpis vitae tellus. Integer purus magna, porttitor id semper ac,
              egestas ac velit. Cras dui quam, dictum eget dolor quis, ultricies
              molestie elit. Morbi ac leo diam. Morbi at tortor vulputate diam
              viverra elementum id at felis. Quisque mattis sem non eros
              dignissim scelerisque. Quisque semper interdum facilisis. Maecenas
              dictum sodales est. Vestibulum pellentesque neque dictum accumsan
              facilisis. Duis et dictum erat. Donec ac magna sem. Phasellus
              malesuada pulvinar dui, a venenatis mauris. Vivamus nec suscipit
              lacus, id interdum nisl. Praesent enim urna, ornare in nisi vel,
              egestas fermentum neque. Nulla vehicula maximus ante sit amet
              placerat. Aliquam in justo vel nisi condimentum rutrum tempor quis
              enim. Vestibulum fringilla odio nec neque volutpat auctor. In sit
              amet aliquam felis. Maecenas mi est, efficitur eget consequat
              quis, accumsan et nunc. Phasellus eu arcu a leo feugiat tempor.
              Aenean porttitor, justo ac tincidunt sagittis, velit eros
              consectetur metus, id blandit justo dui sed felis. Quisque ut
              porta enim. Nullam eleifend ipsum vitae dapibus eleifend.
              Suspendisse interdum, nulla eu pellentesque suscipit, neque sapien
              tempor ex, et ultrices magna lacus eu ipsum. Sed consequat orci
              neque, eget porttitor diam laoreet quis. Nullam ullamcorper urna
              ac erat condimentum, eu rhoncus arcu gravida. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Proin lectus est, mattis at
              risus non, tristique venenatis nunc. Suspendisse ex augue, laoreet
              sed mi ut, auctor porta libero. Morbi eu pharetra est. Nunc non
              elementum libero, eget faucibus nulla. Integer pharetra sapien id
              egestas euismod. Sed tincidunt luctus ligula, a sagittis turpis
              consectetur eu. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Curabitur ultrices, tortor id tempus faucibus, turpis
              libero viverra lectus, non faucibus tellus est non arcu. Praesent
              aliquet hendrerit varius. Cras eget tempus ligula, interdum
              posuere nisl. Vestibulum tincidunt nisi eget scelerisque tempor.
              Vestibulum nunc neque, pharetra quis mattis a, suscipit sit amet
              sapien. Ut massa tortor, feugiat in volutpat eget, aliquam quis
              diam. Nam tempus lacus dictum hendrerit elementum. Donec a aliquet
              magna. Fusce lacinia, nibh id cursus condimentum, ex ipsum
              convallis tellus, feugiat faucibus elit nulla et massa. Cras
              viverra fringilla est, fermentum ultrices est gravida mattis.
              Donec eu ullamcorper justo, eu suscipit neque. Maecenas porttitor
              dui eget felis facilisis euismod vitae in risus. Proin arcu nibh,
              scelerisque eget neque sed, tincidunt elementum erat. Nam maximus
              est vel congue congue. Nullam ipsum eros, blandit nec egestas sed,
              pharetra in lectus. Vestibulum facilisis velit sit amet purus
              hendrerit, in tristique sapien sollicitudin. Nulla id sem a quam
              suscipit placerat non sit amet felis. Maecenas bibendum tristique
              tortor tincidunt ullamcorper. Donec non leo placerat, ultricies
              arcu id, scelerisque metus. Donec aliquet scelerisque diam, sed
              feugiat lacus dignissim ac. Etiam rutrum eget eros et commodo.
              Pellentesque in leo venenatis, efficitur dui a, lobortis lectus.
              Aliquam id nisl a purus cursus tincidunt a vitae ipsum. Quisque
              erat tellus, elementum consequat velit sed, vulputate pharetra
              orci. Nulla vestibulum condimentum egestas. Aenean ut fringilla
              elit. Aliquam ligula sapien, posuere in porta nec, venenatis ut
              tellus. Morbi et lacus sollicitudin felis feugiat bibendum. Nunc
              vehicula varius turpis, sit amet accumsan lorem dapibus non. Etiam
              id ex nibh. Etiam bibendum, velit sit amet interdum pretium, ex
              libero sollicitudin nulla, eget fermentum orci augue eget risus.
              In consectetur, enim sed tristique condimentum, nibh ante feugiat
              metus, ac tempor nisl odio mattis mauris. Cras viverra imperdiet
              suscipit. Fusce tortor risus, fermentum a eros nec, pellentesque
              bibendum dui. Maecenas vel nisl porta nunc imperdiet molestie sed
              vitae quam. Aenean mattis ornare mi non porttitor. Etiam ultrices
              elementum ligula, eget dictum ex sollicitudin ut. Nam sed arcu nec
              diam ornare sollicitudin ut et nisi. Nunc pretium euismod tempor.
              Etiam a accumsan elit. Aenean lobortis malesuada dui id euismod.
              Mauris vel turpis in turpis hendrerit ornare vitae in nisl.
              Suspendisse ac risus luctus, varius lorem eu, suscipit ipsum.
              Aliquam erat volutpat. Mauris at faucibus massa. Vestibulum
              commodo blandit tincidunt. Ut sed consectetur mi. Pellentesque
              euismod ut tortor non pretium. Maecenas posuere, metus nec gravida
              tempus, est tortor ultrices augue, et dignissim dui nulla non
              ligula. Nunc vulputate tellus sit amet lectus posuere
              sollicitudin. Duis in felis nisi. Proin non orci id sapien
              pellentesque sollicitudin. Sed a sem felis. Praesent feugiat ex id
              lectus sodales, quis luctus justo interdum. Suspendisse a
              pellentesque augue.
            </Typography>
          </>
        )}
      </Header>
    </ThemeContext.Provider>
  );
}
