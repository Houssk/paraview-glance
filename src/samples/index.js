import Images from 'paraview-glance/src/samples/images';

// prettier-ignore
export default [
  {
    label: 'Lysozyme.pdb',
    image: Images.Lysozyme,
    size: '135 KB',
    datasets: [
      {
        name: 'Lysozyme.pdb',
        url: 'https://kitware.github.io/vtk-js-datasets/data/pdb/2LYZ.pdb',
      },
    ],
  },
  {
    label: 'LIDC2',
    image: Images.LIDC2,
    size: '2 MB',
    datasets: [
      {
        name: 'LIDC2.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/LIDC2.vti',
      },
    ],
  },
  {
    label: 'Tooth.nrrd',
    image: Images.Tooth,
    size: '1.6 MB',
    datasets: [
      {
        name: 'Tooth.nrrd',
        url: 'https://kitware.github.io/vtk-js-datasets/data/nrrd/tooth.nrrd',
      },
    ],
  },
  {
    label: 'Foot',
    image: Images.Foot,
    url: 'https://kitware.github.io/vtk-js-datasets/data/vti/foot.vti',
    size: '4.3 MB',
    datasets: [
      {
        name: 'Foot.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/foot.vti',
      },
    ],
    acknowledgement: 'Philips Research, Hamburg, Germany',
    description: 'Rotational C-arm x-ray scan of a human foot. Tissue and bone are present in the dataset.',
  },
  {
    label: 'Aneurism.vti',
    image: Images.Aneurism,
    size: '348 KB',
    datasets: [
      {
        name: 'Aneurism.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/aneurism.vti',
      },
    ],
    acknowledgement: 'Philips Research, Hamburg, Germany',
    description: 'Rotational C-arm x-ray scan of the arteries of the right half of a human head. A contrast agent was injected into the blood and an aneurism is present.',
  },
  {
    label: 'Head MRI CISS',
    image: Images.Head,
    size: '5.1 MB',
    datasets: [
      {
        name: 'Head.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/mri_ventricles.vti',
      },
    ],
    acknowledgement: 'Dirk Bartz, VCM, University of Tübingen, Germany',
    description: '1.5T MRT 3D CISS dataset of a human head that highlights the CSF (Cerebro-Spinal-Fluid) filled cavities of the head.',
  },
  {
    label: 'Skull',
    image: Images.Skull,
    size: '9.9 MB',
    datasets: [
      {
        name: 'skull.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/skull.vti',
      },
    ],
    acknowledgement: 'Siemens Medical Solutions, Forchheim, Germany',
    description: 'Rotational C-arm x-ray scan of phantom of a human skull.',
  },
  {
    label: 'Engine',
    image: Images.Engine,
    size: '3.1 MB',
    datasets: [
      {
        name: 'Engine.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/engine.vti',
      },
    ],
    acknowledgement: 'General Electric',
    description: 'CT scan of two cylinders of an engine block.',
  },
  {
    label: 'Backpack.vti',
    image: Images.Backpack,
    size: '8.3 MB',
    datasets: [
      {
        name: 'Backpack.vti',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vti/backpack.vti',
      },
    ],
  },
  {
    label: 'SinglePin.vtp',
    image: Images.SinglePin,
    size: '8.2 MB',
    datasets: [
      {
        name: 'SinglePin.vtp',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vtp/single-pin.vtp',
      },
    ],
  },
  {
    label: 'lidar.vtp',
    image: Images.Lidar,
    size: '5.3 MB',
    datasets: [
      {
        name: 'lidar.vtp',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vtp/lidar.vtp',
      },
    ],
  },
  {
    label: '202-t',
    image: Images.CAD,
    url: 'https://kitware.github.io/vtk-js-datasets/data/vtp/202-t.vtp',
    size: '82 KB',
    datasets: [
      {
        name: '202-t.vtp',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vtp/202-t.vtp',
      },
      {
        name: '202-t-edges.vtp',
        url: 'https://kitware.github.io/vtk-js-datasets/data/vtp/202-t-edges.vtp',
      },
    ],
  },
];
